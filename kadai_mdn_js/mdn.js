const date = new Date(2023, 8, 22);
const [year, month, day] = [
  date.getFullYear(),
  date.getMonth(),
  date.getDate()
];

console.log(year + '年' + month + '月' +  day + '日');
