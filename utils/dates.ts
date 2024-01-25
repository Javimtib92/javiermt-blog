export function formatDate(inputDate: Date) {
  // Convert the input date string to a Date object
  var date = new Date(inputDate);

  // Get the current date
  var currentDate = new Date();

  // Function to format the date
  function formatDate(date: Date) {
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    } as Intl.DateTimeFormatOptions;

    return new Intl.DateTimeFormat('en-GB', options).format(date);
  }

  // Check if the input date is today
  if (
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  ) {
    // Format for "Today"
    var formattedDate = formatDate(date) + ' (Today)';
  } else {
    // Format for other dates
    formattedDate = formatDate(date);
  }

  return formattedDate;
}

export function getYearDiff(from: Date, to: Date) {
  const diff = to.getTime() - from.getTime();

  const date = new Date(diff);

  return Math.abs(date.getFullYear() - 1970);
}

/**
 * Compare the two dates and return 1 if the first date is after the second, -1 if the first date is before the second or 0 if dates are equal.
 */
export function compareAsc(dateLeft: Date, dateRight: Date) {
  const diff = dateLeft.getTime() - dateRight.getTime();

  return diff > 0 ? 1 : diff < 0 ? -1 : 0;
}

/**
 * Compare the two dates and return -1 if the first date is after the second, 1 if the first date is before the second or 0 if dates are equal.
 */
export function compareDesc(dateLeft: Date, dateRight: Date) {
  const diff = dateLeft.getTime() - dateRight.getTime();

  return diff > 0 ? -1 : diff < 0 ? 1 : 0;
}
