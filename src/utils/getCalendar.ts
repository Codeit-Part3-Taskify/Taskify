export default function getCalendar(currentDate: Date) {
  const lastDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const dateList = [];
  let dateCnt = 0;
  for (let i = 0; i < lastDate + firstDay; i += 1) {
    if (firstDay > i) {
      dateList.push(0);
    } else {
      dateList.push((dateCnt += 1));
    }
  }

  return dateList;
}
