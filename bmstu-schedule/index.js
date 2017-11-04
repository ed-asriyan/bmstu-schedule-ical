'use strict';

import {fetchSchedule} from './api';

const generateICal = async function (faculty, department, group) {
    const scheduleJson = await fetchSchedule(faculty, department, group);

    return JSON.stringify(scheduleJson);
};

export {generateICal};
