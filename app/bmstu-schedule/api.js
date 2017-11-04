/**
 * Created by ed on 03/11/2017.
 */

'use strict';

const buildUrl = function (host, path, queryParams) {
    const queryPart = Object.keys(queryParams)
        .map(x => `${encodeURIComponent(x)}=${encodeURIComponent(queryParams[x])}`)
        .reduce((a, b) => `${a}&${b}`);

    return `${host}${path}?${queryPart}`;
};

const buildUrlForSchedule = function (faculty, department, group) {
    return buildUrl('', '/proxy/api/timetable/get/now/param', {
        'faculty': faculty,
        'department': department,
        'groupNumber': group,
    });
};

const fetchSchedule = async function (faculty, department, group) {
    const url = buildUrlForSchedule(faculty, department, group);

    const response = await fetch(url);
    return await response.json();
};

export {fetchSchedule};
