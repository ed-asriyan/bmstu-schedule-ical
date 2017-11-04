'use strict';

import {fetchSchedule} from './api';
import {createICal} from './generator';

const generateICal = async function (faculty, department, group) {
    const scheduleJson = await fetchSchedule(faculty, department, group);
    const cal = createICal(scheduleJson);

    cal.name(`BMSTU ${new Date().getFullYear()} ${faculty}${department}-${group}`);

    return cal;
};

export {generateICal};
