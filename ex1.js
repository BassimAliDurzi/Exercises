const currentDate = new Date();
console.log(currentDate.toLocaleDateString());

const day = currentDate.getDay();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();

const formattedDay = day < 10 ? '0' + day: day;
const formattedMonth = month < 10 ? '0' + month: month;

const formattedCurrentDate = year + '/' + formattedMonth + '/' + formattedDay;
console.log(formattedCurrentDate)