'use strict';

import {fetchSchedule} from './api';
import {createICal} from './generator';

const generateICal = async function (faculty, department, group) {
    const scheduleJson = await fetchSchedule(faculty, department, group);
    const icalString = createICal(scheduleJson);

    return icalString;
};

export {generateICal};
