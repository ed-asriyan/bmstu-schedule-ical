/**
 * Created by ed on 04/11/2017.
 */

'use strict';

import ical from 'ical-generator';
import getPeriodTime from './getPeriodTime';
import getSemesterTime from './getSemesterTime';

const createEvent = function (cal, semesterDayTime, periodTime, studyClass) {
    const isNormal = studyClass['type'] === 'normal';
    const nominator = studyClass['type'] === 'nominator';

    const start = new Date(
        semesterDayTime.first.getFullYear(),
        semesterDayTime.first.getMonth(),
        semesterDayTime.first.getDate() + (nominator ? 7 : 0),
        periodTime.begin.getHours(),
        periodTime.begin.getMinutes(),
    );

    const end = new Date(
        semesterDayTime.first.getFullYear(),
        semesterDayTime.first.getMonth(),
        semesterDayTime.first.getDate() + (nominator ? 7 : 0),
        periodTime.end.getHours(),
        periodTime.end.getMinutes(),
    );

    let title = studyClass['studyClassTitle'] || '';
    title = title.replace('(сем) ', '');
    title = title.replace('(лаб) ', '');
    title = title.replace('(лек) ', '');
    if (title === 'зн -----' || title === 'чс -----') return;

    let description = studyClass['studyClassLecturer'] || '';
    description = description.replace('null', '');

    return cal.createEvent({
        start: start,
        end: end,
        summary: title,
        location: studyClass['studyClassRoom'],
        description: description,
        repeating: {
            freq: 'WEEKLY',
            interval: isNormal ? 1 : 2,
            until: semesterDayTime.last,
        },
    });
};

const handlePeriod = function (cal, semesterDayTime, period) {
    const periodTime = getPeriodTime(period);
    for (let studyClass of period['studyClasses']) {
        createEvent(cal, semesterDayTime, periodTime, studyClass);
    }
};

const handleDay = function (cal, semesterTime, day) {
    const dayName = day['title'];
    const semesterDayTime = semesterTime[dayName];
    for (let period of day['periods']) {
        handlePeriod(cal, semesterDayTime, period);
    }
};

const createICal = function (scheduleJson) {

    const cal = ical();

    const semesterTime = getSemesterTime();

    for (let day of scheduleJson[0]['studyWeek']) {
        handleDay(cal, semesterTime, day);
    }

    return cal;
};

export {createICal};
