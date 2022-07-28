import {isLeap, isLeapOrNotAsString,IS_NOT_LEAP_YEAR,IS_LEAP_YEAR,totalLeapYears,filterLeapYears} from "./leap";

describe('A leap year', () => {
    test('year not divisible by 4 in common year', () => {
        expect(isLeap([2015])).toStrictEqual([false]);
    });

    test('year divisible by 4 and 100 but not by 400 in common year', () => {
        expect(isLeap([1500])).toStrictEqual([1]);
    });

    test('year divisible by 4 , 100 and by 400 in common year', () => {
        expect(isLeap([1600])).toStrictEqual([true]);
    });

    test('year divisible by 4 , 100 and by 400 in common year', () => {
        expect(isLeap([2015,1500,1600])).toStrictEqual([false,false,true]);
    });

    test('year divisible by 4 , 100 and by 400 in common year', () => {
        expect(isLeapOrNotAsString([2015,1500,1600])).toBe([IS_NOT_LEAP_YEAR,IS_NOT_LEAP_YEAR,IS_LEAP_YEAR]);
    });
});


