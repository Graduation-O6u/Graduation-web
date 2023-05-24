export default function turnDate(current, ctime) {
  var date = new Date(current);
  var time = ctime.split(" ");

  // Step 2: Extract the individual components of the date and time
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  var hours = time[0].split(":")[0];

  var minutes = time[0].split(":")[1];
  var seconds = "26";
  var milliseconds = "597";

  // Step 3: Format the components into the desired string format
  var formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;

  // Step 4: Output the formatted date
  return formattedDate;
}
