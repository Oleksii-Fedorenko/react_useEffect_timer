import dayjs, { Dayjs } from 'dayjs';

export function getReamainingTimeUntilMsTimeStamp(timestampMs: number) {
  function padWithZeros(num: number, minLength: number) {
    const numberString = num.toString();

    if (numberString.length >= minLength) {
      return numberString;
    }

    return '0'.repeat(minLength - numberString.length) + numberString;
  }

  function getRemainingSeconds(nowDayjs: Dayjs, timestampDayjs: Dayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;

    return padWithZeros(seconds, 2);
  }

  function getRemainingMinutes(nowDayjs: Dayjs, timestampDayjs: Dayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;

    return padWithZeros(minutes, 2);
  }

  function getRemainingHours(nowDayjs: Dayjs, timestampDayjs: Dayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;

    return padWithZeros(hours, 2);
  }

  function getRemainingDays(nowDayjs: Dayjs, timestampDayjs: Dayjs) {
    const days = timestampDayjs.diff(nowDayjs, 'days');

    return days.toString();
  }

  const timestampDayjs: Dayjs = dayjs(timestampMs);
  const nowDayjs: Dayjs = dayjs();

  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
  };
}
