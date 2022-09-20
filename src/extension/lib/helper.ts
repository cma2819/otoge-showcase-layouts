import { URL } from 'url'

export const googleSpreadsheetUrlToId = (url: string): string => {
  const spreadSheetUrl = new URL(url);
  const pathNames = spreadSheetUrl.pathname.split('/');
  // pathName must be '[0]/spreadsheets'[1]/'d'[2]/<spreadsheet id>[3]
  return pathNames[3] || '';
}

export const timeStringToSeconds = (time: string): number => {
  const digits = time.split(':');

  const hours = parseInt(digits[0]);
  const minutes = parseInt(digits[1]);
  const seconds = parseInt(digits[2]);

  return (hours * 3600) + (minutes * 60) + seconds;
}

export const makeEntitiesFromDataValues = <T>(data: any[][]): T[] => {
  const head = data[0];

  return data.filter((_, index) => index > 0).map((d) => {
    return Object.fromEntries(head.map((h, idx) => [h, d[idx]]));
  });
}