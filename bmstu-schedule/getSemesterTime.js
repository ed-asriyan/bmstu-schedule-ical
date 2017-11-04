/**
 * Created by ed on 04/11/2017.
 */

'use strict';

const getSemesterTime = function () {
    return {
        monday: {
            first: new Date(2017, 8, 4),
            last: new Date(2017, 11, 25, 59, 59, 59),
        },
        tuesday: {
            first: new Date(2017, 8, 5),
            last: new Date(2017, 11, 26, 59, 59, 59),
        },
        wednesday: {
            first: new Date(2017, 8, 6),
            last: new Date(2017, 11, 27, 59, 59, 59),
        },
        thursday: {
            first: new Date(2017, 8, 7),
            last: new Date(2017, 11, 28, 59, 59, 59),
        },
        friday: {
            first: new Date(2017, 8, 1),
            last: new Date(2017, 11, 29, 59, 59, 59),
        },
        saturday: {
            first: new Date(2017, 8, 2),
            last: new Date(2017, 11, 30, 59, 59, 59),
        },
    };
};

export default getSemesterTime;
