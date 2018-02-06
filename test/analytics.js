/**
 * Created by ed on 06/02/2018.
 */

'use strict';

import assert from 'assert';
import rewire from 'rewire';

const module = rewire('../app/analytics.js');

module.__set__('init', () => {
});

describe('api', function () {
    const CATEGORY_DEFAULT = 'category';
    const ACTION_DEFAULT = 'action';
    const LABEL_DEFAULT = 'label';

    const TYPE_DEFAULT = 'type';
    const GROUP_DEFAULT = 'GROUP';
    const RESULT_DEFAULT = 'res';

    describe('sendEvent', function () {
        const sendEvent = module.__get__('sendEvent');

        it('should invokes send', function () {
            module.__set__('send', function () {
                return [...arguments];
            });

            assert.deepEqual(sendEvent(CATEGORY_DEFAULT, ACTION_DEFAULT, LABEL_DEFAULT), ['event', {
                eventCategory: CATEGORY_DEFAULT,
                eventAction: ACTION_DEFAULT,
                eventLabel: LABEL_DEFAULT
            }]);
        });
    });

    describe('trackPageView', function () {
        const trackPageView = module.__get__('trackPageView');

        it('should invokes send', function () {
            module.__set__('send', function () {
                return [...arguments];
            });

            assert.deepEqual(trackPageView(), ['pageview']);
        });
    });

    describe('trackScheduleRequest', function () {
        const trackScheduleRequest = module.__get__('trackScheduleRequest');

        it('should invokes sendEvent', function () {
            module.__set__('sendEvent', function () {
                return [...arguments];
            });

            assert.deepEqual(trackScheduleRequest(TYPE_DEFAULT, GROUP_DEFAULT), ['Schedule Input', TYPE_DEFAULT, GROUP_DEFAULT]);
        });
    });

    describe('trackScheduleResult', function () {
        const trackScheduleResult = module.__get__('trackScheduleResult');

        it('should invokes sendEvent', function () {
            module.__set__('sendEvent', function () {
                return [...arguments];
            });

            assert.deepEqual(trackScheduleResult(RESULT_DEFAULT, GROUP_DEFAULT), ['Schedule Response', RESULT_DEFAULT, GROUP_DEFAULT]);
        });
    });
});
