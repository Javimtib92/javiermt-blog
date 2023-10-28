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
