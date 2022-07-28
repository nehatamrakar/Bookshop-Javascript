const ZERO = 0;
const HUNDRED = 100;
const FOUR = 4;
const FOUR_HUNDRED = 400;
export const IS_LEAP_YEAR = "is leap year";
export const IS_NOT_LEAP_YEAR = "is not leap year";

export function isLeap(yearList) {
    let isLeapYearList = yearList.map(isLeapYear);
    return isLeapYearList;
}

export function isLeapOrNotAsString(yearList){
    let isLeapYearList = isLeap(yearList);
    let isLeapYearStringList = isLeapYearList.map(isLeapYearToString);
    return isLeapYearStringList;
}

export function filterLeapYears(yearList){
    let leapYearList = yearList.filter(isLeapYear);
    return leapYearList;
}

export function totalLeapYears(yearList){
    let isLeapYearList = yearList.map(isLeapYear);
    let totalLeapYear = isLeapYearList.reduce(countLeapYears);
    return totalLeapYear;
}

console.log(isLeap([100,200,1600]));
console.log(isLeapOrNotAsString([100,200,1600]));
console.log(filterLeapYears([100,200,1600]));
console.log((totalLeapYears([100,200,1600])));

function countLeapYears(total, year){
    return total += year ? 1 : 0;
}

function isLeapYear(year){
    return isDivisibleBy(year, HUNDRED) ? isDivisibleBy(year, FOUR_HUNDRED) : isDivisibleBy(year,FOUR);
}

function isLeapYearToString(isLeapYear){
    return isLeapYear ? IS_LEAP_YEAR : IS_NOT_LEAP_YEAR;
}

function isDivisibleBy(year, divisor) {
    return year % divisor === ZERO;
}
