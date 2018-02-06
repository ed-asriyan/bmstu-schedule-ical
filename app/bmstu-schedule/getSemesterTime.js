/**
 * Created by ed on 04/11/2017.
 */

'use strict';

const getFirstWeekDayInTheMonth = function (year, month, weekDay) {
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
            first: getFirstWeekDayInTheMonth(beginYear, beginMonth, 1),
            last: new Date(endYear, endMonth + 1, -2, 59, 59, 59),
        },
        'tuesday': {
            first: getFirstWeekDayInTheMonth(beginYear, beginMonth, 2),
            last: new Date(endYear, endMonth + 1, -2, 59, 59, 59),
        },
        'wednesday': {
            first: getFirstWeekDayInTheMonth(beginYear, beginMonth, 3),
            last: new Date(endYear, endMonth + 1, -2, 59, 59, 59),
        },
        'thursday': {
            first: getFirstWeekDayInTheMonth(beginYear, beginMonth, 4),
            last: new Date(endYear, endMonth + 1, -2, 59, 59, 59),
        },
        'friday': {
            first: getFirstWeekDayInTheMonth(beginYear, beginMonth, 5),
            last: new Date(endYear, endMonth + 1, -2, 59, 59, 59),
        },
        'saturday': {
            first: getFirstWeekDayInTheMonth(beginYear, beginMonth, 6),
            last: new Date(endYear, endMonth + 1, -2, 59, 59, 59),
        },
    };
};

export default getSemesterTime;
