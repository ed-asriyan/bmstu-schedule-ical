/**
 * Created by ed on 04/11/2017.
 */

'use strict';

const getPeriodTime = function (period) {
    const base = {
        '1': {begin: new Date(0, 0, 0, 8, 30), end: new Date(0, 0, 0, 10, 5)},
        '2': {begin: new Date(0, 0, 0, 10, 15), end: new Date(0, 0, 0, 11, 50)},
        '3': {begin: new Date(0, 0, 0, 12, 0), end: new Date(0, 0, 0, 13, 35)},
        '4': {begin: new Date(0, 0, 0, 13, 50), end: new Date(0, 0, 0, 15, 25)},
        '5': {begin: new Date(0, 0, 0, 15, 40), end: new Date(0, 0, 0, 17, 15)},
        '6': {begin: new Date(0, 0, 0, 17, 25), end: new Date(0, 0, 0, 19, 0)},
        '7': {begin: new Date(0, 0, 0, 19, 10), end: new Date(0, 0, 0, 20, 45)},
    };

    return base[period['number']];
};

export default getPeriodTime;
