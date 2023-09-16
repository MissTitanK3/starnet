export type Props = {
  date: string | Date | Date[];
  secondsAhead?: number;
  hoursAhead?: number;
  minutesAhead?: number;
  daysAhead?: number;
  monthsAhead?: number;
  yearsAhead?: number;
  weekAhead?: number;
};

/**
 * @param param0 date
 * @param param1 secondsAhead
 * @param param2 hoursAhead
 * @param param3 minutesAhead
 * @param param4 daysAhead
 * @param param5 monthsAhead
 * @param param6 yearsAhead
 * @param param7 weekAhead
 * @info date = new Date();
 * @info Put in how much time you need to add to the date
 * @returns strings of date, time, and boolean that is human readable
 */

export const getLoggedAndExpire = ({
  date,
  secondsAhead = 0,
  hoursAhead,
  minutesAhead,
  daysAhead,
  monthsAhead,
  yearsAhead,
  weekAhead = 1,
}: Props) => {
  const setupDate = new Date(date.toString());
  const formattedDate = setupDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'long',
  });
  const formattedDateNoTZ = setupDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
  const shortFormattedDate = setupDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  });
  const timeFormattedDate = setupDate.toLocaleDateString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });
  const timeOnly = setupDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });

  const calculateAhead = new Date(setupDate.getTime() + secondsAhead);
  const formatAhead = calculateAhead.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'long',
  });
  const timeAndAMPM = calculateAhead.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  });

  const timeDiffInSeconds = Math.round((Date.now() - setupDate.getTime()) / 1000);
  const timeSinceCreationInSeconds = Math.max(0, 60 - timeDiffInSeconds);
  const isWeekAhead = setupDate.getTime() + weekAhead < new Date().getTime();
  const isMonthAhead = setupDate.getTime() + weekAhead * 4 < new Date().getTime();
  const isYearAhead = setupDate.getTime() + weekAhead * 52 < new Date().getTime();
  const isDayAhead = setupDate.getTime() + 60 * 60 * 24 < new Date().getTime();
  const isHourAhead = setupDate.getTime() + 60 * 60 < new Date().getTime();
  const isMinuteAhead = setupDate.getTime() + 60 < new Date().getTime();

  const isVariableMinuteAhead = setupDate.getTime() + (minutesAhead || 0) * 60 * 1000 < new Date().getTime();
  const isVariableHourAhead = setupDate.getTime() + (hoursAhead || 0) * 60 * 60 * 1000 < new Date().getTime();
  const isVariableDayAhead = setupDate.getTime() + (daysAhead || 0) * 24 * 60 * 60 * 1000 < new Date().getTime();
  const isVariableWeekAhead = setupDate.getTime() + (weekAhead || 0) * 7 * 24 * 60 * 60 * 1000 < new Date().getTime();
  const isVariableMonthAhead =
    setupDate.getTime() + (monthsAhead || 0) * 4 * 7 * 24 * 60 * 60 * 1000 < new Date().getTime();
  const isVariableYearAhead =
    setupDate.getTime() + (yearsAhead || 0) * 52 * 7 * 24 * 60 * 60 * 1000 < new Date().getTime();

  const isExpired = setupDate.getTime() + secondsAhead < new Date().getTime();
  const timeInSecond = setupDate.getTime() + secondsAhead - new Date().getTime();
  const dateOnly = setupDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return {
    formattedDate,
    formattedDateNoTZ,
    formatAhead,
    isExpired,
    shortFormattedDate,
    timeFormattedDate,
    timeInSecond,
    timeSinceCreationInSeconds,
    isWeekAhead,
    isMonthAhead,
    isYearAhead,
    isDayAhead,
    isHourAhead,
    isMinuteAhead,
    isVariableHourAhead,
    isVariableMonthAhead,
    isVariableYearAhead,
    isVariableMinuteAhead,
    isVariableDayAhead,
    isVariableWeekAhead,
    timeOnly,
    dateOnly,
    timeAndAMPM,
  };
};
