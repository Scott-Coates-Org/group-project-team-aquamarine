export function cardDateFormat(date) {
  const newDate = date.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formatedDate = `${newDate[2]} ${months[newDate[1] - 1]}`;
  return formatedDate;
}

export function getFormatedDate(date) {
  const parsedDate = new Date(date);
  const month = parsedDate.toLocaleString("en-EN", {
    month: "long",
  });
  const day =
    parsedDate.getDate() < 10
      ? `0${parsedDate.getDate()}`
      : parsedDate.getDate();
  const formatDate = `${month} ${day}, ${parsedDate.getFullYear()}`;
  return formatDate;
}
