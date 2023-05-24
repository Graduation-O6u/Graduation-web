export default function calculateDateDistance(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  // Calculate the time difference in milliseconds
  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  // Calculate the number of days
  const days = Math.floor(timeDiff / (1000 * 3600 * 24));

  // Calculate the number of years
  const years = Math.floor(days / 365);

  // Calculate the number of months
  const months = Math.floor(days / 30);

  // Calculate the number of hours
  const hours = Math.floor(timeDiff / (1000 * 3600));

  // Calculate the number of minutes
  const minutes = Math.floor(timeDiff / (1000 * 60));

  // Calculate the number of seconds
  const seconds = Math.floor(timeDiff / 1000);
  if (years > 0) {
    return `${years}y`;
  } else if (months > 0) {
    return `${months}mo`;
  } else if (days > 0) {
    return `${days}d`;
  } else if (hours > 0) {
    return `${hours}h`;
  } else if (minutes > 0) {
    return `${minutes}m`;
  } else {
    return `${seconds}s`;
  }
}
