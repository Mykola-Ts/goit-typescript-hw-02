/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}

function isWeekend(day: string): boolean {
  if (
    day.toLowerCase() === DaysOfWeek.Saturday.toLowerCase() ||
    day.toLowerCase() === DaysOfWeek.Sunday.toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}
