/**
 * Created by ed on 03/02/2018.
 */

'use strict';

import assert from 'assert';
import rewire from 'rewire';

const module = rewire('../app/bmstu-schedule/getSemesterTime.js');

describe('getSemesterTime', function () {
    describe('getFirstWeekDay()', function () {
        const getFirstWeekDayInTheMonth = module.__get__('getFirstWeekDayInTheMonth');

        it('should works if day is the first', function () {
            const firstDay = new Date(2018, 2, 5);

            const expected = firstDay;
            const actual = getFirstWeekDayInTheMonth(firstDay.getFullYear(), firstDay.getMonth(), 1);

            assert.equal(actual.getFullYear(), expected.getFullYear(), 'years are equal');
            assert.equal(actual.getMonth(), expected.getMonth(), 'months are equal');
            assert.equal(actual.getDate(), expected.getDate(), 'dates are equal');
        });

        it('should works if day is the last', function () {
            const firstDay = new Date(2018, 2, 4);

            const expected = firstDay;
            const actual = getFirstWeekDayInTheMonth(firstDay.getFullYear(), firstDay.getMonth(), 0);

            assert.equal(actual.getFullYear(), expected.getFullYear(), 'years are equal');
            assert.equal(actual.getMonth(), expected.getMonth(), 'months are equal');
            assert.equal(actual.getDate(), expected.getDate(), 'dates are equal');
        });

        it('should works if day is in the middle', function () {
            const firstDay = new Date(2018, 2, 7);

            const expected = firstDay;
            const actual = getFirstWeekDayInTheMonth(firstDay.getFullYear(), firstDay.getMonth(), 3);

            assert.equal(actual.getFullYear(), expected.getFullYear(), 'years are equal');
            assert.equal(actual.getMonth(), expected.getMonth(), 'months are equal');
            assert.equal(actual.getDate(), expected.getDate(), 'dates are equal');
        });
    });

    describe('getSemesterTime()', function () {
        const getFirstWeekDayInTheMonth = module.__get__('getFirstWeekDayInTheMonth');
        const getSemesterTime = module.__get__('getSemesterTime');

        it('should works for summer', function () {
            const timePoint = new Date(2018, 2, 7);
            // timePoint.timeZone = 3;

            const beginYear = timePoint.getFullYear();
            const endYear = beginYear;
            const beginMonth = 1;
            const endMonth = beginMonth + 3;
            const expected = {
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

            const actual = getSemesterTime(timePoint);

            for (let day of Object.keys(expected)) {
                const exp = expected[day];
                const act = actual[day];

                assert.equal(act.first.getFullYear(), exp.first.getFullYear(), 'first years are equal');
                assert.equal(act.last.getFullYear(), exp.last.getFullYear(), 'last years are equal');
                assert.equal(act.first.getMonth(), exp.first.getMonth(), 'first months are equal');
                assert.equal(act.last.getMonth(), exp.last.getMonth(), 'last months are equal');
                assert.equal(act.first.getDate(), exp.first.getDate(), 'first dates are equal');
                assert.equal(act.last.getDate(), exp.last.getDate(), 'last dates are equal');
            }
        });

        it('should works for autumn', function () {
            const timePoint = new Date(2018, 10, 8);

            const beginYear = timePoint.getFullYear();
            const endYear = beginYear;
            const beginMonth = 8;
            const endMonth = beginMonth + 3;
            const expected = {
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

            const actual = getSemesterTime(timePoint);

            for (let day of Object.keys(expected)) {
                const exp = expected[day];
                const act = actual[day];

                assert.equal(act.first.getFullYear(), exp.first.getFullYear(), 'first years are equal');
                assert.equal(act.last.getFullYear(), exp.last.getFullYear(), 'last years are equal');
                assert.equal(act.first.getMonth(), exp.first.getMonth(), 'first months are equal');
                assert.equal(act.last.getMonth(), exp.last.getMonth(), 'last months are equal');
                assert.equal(act.first.getDate(), exp.first.getDate(), 'first dates are equal');
                assert.equal(act.last.getDate(), exp.last.getDate(), 'last dates are equal');
            }
        });
    });
});