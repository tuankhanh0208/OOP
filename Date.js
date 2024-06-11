let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    this.setDay = function (day) {
        return this.day;
    }
    this.setMonth = function (month) {
        return this.month;
    }
    this.setYear = function (year) {
        return this.year;
    }
};
let date = new MyDate(2, 2, 2007);

date.setDay(10);
date.setMonth(10);
date.setYear(2019);

let day = date.getDay();

let month = date.getMonth();

let year = date.getYear();

console.log(day + "/" + month + "/" + year);

