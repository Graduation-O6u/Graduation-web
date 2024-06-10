export function getTimeDifference(givenDate) {
  // given date
  const calcDate = new Date(givenDate);
  // Current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const differenceInMills = currentDate.getTime() - calcDate.getTime();

  // Convert milliseconds to days, hours, minutes, and seconds
  const days = Math.floor(differenceInMills / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (differenceInMills % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (differenceInMills % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((differenceInMills % (1000 * 60)) / 1000);

  // Return the appropriate value based on the greatest non-zero unit
  if (days > 0) {
    if (days === 1) return days + " Day";
    return days + " Days";
  } else if (hours > 0) {
    if (hours === 1) return hours + " Hour";

    return hours + " Hours";
  } else if (minutes > 0) {
    if (minutes === 1) return minutes + " Minute";

    return minutes + " Minutes";
  } else {
    if (seconds === 1) return Math.abs(seconds) + " Second";
    return Math.abs(seconds) + " Seconds";
  }
}
