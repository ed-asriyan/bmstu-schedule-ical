/**
 * Created by ed on 04/11/2017.
 */

'use strict';

const getFirstWeekDay = function (year, month, weekDay) {
    const day = new Date(year, month);
    while (day.getDay() !== weekDay) {
        day.setDate(day.getDate() + 1);
    }
    return day;
};

const getSemesterTime = function (timePoint = new Date()) {
    const isSummer = timePoint.getMonth() < 7;

    const beginYear = timePoint.getFullYear();
    const endYear = beginYear;
    const beginMonth = isSummer ? 1 : 8;
    const endMonth = beginMonth + 3;

    return {
        'monday': {
            first: getFirstWeekDay(beginYear, beginMonth, 1),
            last: new Date(endYear, endMonth + 1, -2, 59, 59, 59),
        },
        'tuesday': {
            first: getFirstWeekDay(beginYear, beginMonth, 2),
            last: new Date(endYear, endMonth + 1, -2, 59, 59, 59),
        },
        'wednesday': {
            first: getFirstWeekDay(beginYear, beginMonth, 3),
            last: new Date(endYear, endMonth + 1, -2, 59, 59, 59),
        },
        'thursday': {
            first: getFirstWeekDay(beginYear, beginMonth, 4),
            last: new Date(endYear, endMonth + 1, -2, 59, 59, 59),
        },
        'friday': {
            first: getFirstWeekDay(beginYear, beginMonth, 5),
            last: new Date(endYear, endMonth + 1, -2, 59, 59, 59),
        },
        'saturday': {
            first: getFirstWeekDay(beginYear, beginMonth, 6),
            last: new Date(endYear, endMonth + 1, -2, 59, 59, 59),
        },
    };
};

export default getSemesterTime;
