/**
 * Created by ed on 02/02/2018.
 */

'use strict';

import assert from 'assert';
import rewire from 'rewire';

const api = rewire('../app/bmstu-schedule/api.js');

describe('api', function () {
    const HOST_DEFAULT = 'my_host';
    const PATH_DEFAULT = 'my_PATH';
    const QUERY_DEFAULT = {a: '1', b: '2'};
    const QUERY_DEFAULT_STRING = 'a=1&b=2';

    const FACULTY_DEFAULT = 'my_faculty';
    const DEPARTMENT_DEFAULT = 'my_department';
    const GROUP_DEFAULT = 'my_group';

    describe('buildUrl()', function () {
        const buildUrl = api.__get__('buildUrl');

        it('should return host if path and queryParams are empty', function () {
            assert.equal(buildUrl(HOST_DEFAULT, '', {}), HOST_DEFAULT);
        });

        it('should return host with path if queryParams are empty', function () {
            const expected = `${HOST_DEFAULT}${PATH_DEFAULT}`;
            const actual = buildUrl(HOST_DEFAULT, PATH_DEFAULT, {});
            assert.equal(actual, expected);
        });

        it('should return host with path, query', function () {
            const expected = `${HOST_DEFAULT}${PATH_DEFAULT}?${QUERY_DEFAULT_STRING}`;
            const actual = buildUrl(HOST_DEFAULT, PATH_DEFAULT, QUERY_DEFAULT);
            assert.equal(actual, expected);
        });

        it('should it should work if host empty', function () {
            const expected = `${PATH_DEFAULT}?${QUERY_DEFAULT_STRING}`;
            const actual = buildUrl('', PATH_DEFAULT, QUERY_DEFAULT);
            assert.equal(actual, expected);
        });
    });

    describe('buildUrlForSchedule()', function () {
        const buildUrlForSchedule = api.__get__('buildUrlForSchedule');

        it('should build right url', function () {
            const expected = `/proxy/api/timetable/get/now/param?faculty=${FACULTY_DEFAULT}&department=${DEPARTMENT_DEFAULT}&groupNumber=${GROUP_DEFAULT}`;
            const actual = buildUrlForSchedule(FACULTY_DEFAULT, DEPARTMENT_DEFAULT, GROUP_DEFAULT);
            assert.equal(expected, actual);
        });
    });

    describe('buildUrlForSchedule()', function () {
        const buildUrlForSchedule = api.__get__('buildUrlForSchedule');

        it('should build right url', function () {
            const expected = `/proxy/api/timetable/get/now/param?faculty=${FACULTY_DEFAULT}&department=${DEPARTMENT_DEFAULT}&groupNumber=${GROUP_DEFAULT}`;
            const actual = buildUrlForSchedule(FACULTY_DEFAULT, DEPARTMENT_DEFAULT, GROUP_DEFAULT);
            assert.equal(expected, actual);
        });
    });
});