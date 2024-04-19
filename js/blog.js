let date = new Date();
function getYearMonthDay(date) {
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    return [ `${year} - ${month} - ${day}`];
}
let result = getYearMonthDay(date);

let number = document.getElementsByClassName("date");
for (let ele of number) {
    ele.innerHTML = result;
}
