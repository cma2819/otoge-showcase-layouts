import { google } from 'googleapis';
import { googleSpreadsheetUrlToId, makeEntitiesFromDataValues, timeStringToSeconds } from './lib/helper';
import { NodeCG } from './nodecg';
import { Entrant, Schedule, Commentator } from './types/spreadsheet';

export const programs = (nodecg: NodeCG): void => {

  const logger = new nodecg.Logger('programs');

  const programsReplicant = nodecg.Replicant('programs', {
    defaultValue: []
  });

  const googleApiKey = nodecg.bundleConfig.google.apiKey;
  const googleSpreadsheet = google.sheets({
    version: 'v4',
    auth: googleApiKey,
  });

  const spreadsheetId = googleSpreadsheetUrlToId(nodecg.bundleConfig.google.spreadsheetUri);

  if (spreadsheetId === '') {
    throw new Error('Spreadsheet URL is invalid.');
  }

  let loadDataInterval: NodeJS.Timeout | null = null;
  const loadDataRepository = async () => {
    try {
      const dataResponse = await googleSpreadsheet.spreadsheets.values.batchGet({
        spreadsheetId,
        ranges: [
          'schedules',
          'entrants',
          'commentators',
        ]
      });

      const schedulesValue = dataResponse.data.valueRanges?.find(range => range.range?.includes('schedules'))?.values;
      const entrantsValue = dataResponse.data.valueRanges?.find(range => range.range?.includes('entrants'))?.values;
      const commentatorsValue = dataResponse.data.valueRanges?.find(range => range.range?.includes('commentators'))?.values;

      if (!schedulesValue || !entrantsValue || !commentatorsValue) {
        throw new Error('Invalid spreadsheet values.');
      }

      const schedules = makeEntitiesFromDataValues(schedulesValue) as Schedule[];
      const entrants = makeEntitiesFromDataValues(entrantsValue) as Entrant[];
      const commentators = makeEntitiesFromDataValues(commentatorsValue) as Commentator[];

      programsReplicant.value = schedules.map((schedule) => {
        const players = [
          { name: schedule.player },
          ...entrants.filter(entrant => entrant.programPk === schedule.pk).map(entrant => {
            return { name: entrant.name };
          }),
        ];
        const programCommentators = commentators.filter(commentator => commentator.programPk === schedule.pk).map(commentator => {
          return { name: commentator.name };
        });

        return {
          pk: parseInt(schedule.pk),
          name: schedule.program,
          game: schedule.game,
          players,
          commentators: programCommentators,
          estimate: schedule.estimate,
          estimateRawSeconds: timeStringToSeconds(schedule.estimate),
        }
      });

    } catch (e) {
      logger.error(e);
      if (loadDataInterval) {
        clearInterval(loadDataInterval);
      }
    }
  }

  loadDataRepository();
  loadDataInterval = setInterval(loadDataRepository, 30 * 1000);
}