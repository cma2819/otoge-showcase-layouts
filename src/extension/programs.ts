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
          'commentators',
          'opponents',
        ]
      });

      const schedulesValue = dataResponse.data.valueRanges?.find(range => range.range?.includes('schedules'))?.values;
      const commentatorsValue = dataResponse.data.valueRanges?.find(range => range.range?.includes('commentators'))?.values;
      const opponentsValue = dataResponse.data.valueRanges?.find(range => range.range?.includes('opponents'))?.values;

      if (!schedulesValue || !commentatorsValue || !opponentsValue) {
        throw new Error('Invalid spreadsheet values.');
      }

      const schedules = makeEntitiesFromDataValues<Schedule>(schedulesValue);
      const commentators = makeEntitiesFromDataValues<Commentator>(commentatorsValue);
      const entrants = makeEntitiesFromDataValues<Entrant>(opponentsValue);

      programsReplicant.value = schedules.map((schedule) => {
        const players = [
          ... schedule.player.split(',').map((name) => ({
            name: name.trim(),
          })),
          ... entrants.filter(entrant => entrant.programPk === schedule.pk).map(entrant => ({
            name: entrant.name
          })),
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