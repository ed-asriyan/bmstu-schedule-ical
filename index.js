/**
 * Created by ed on 04/11/2017.
 */

'use strict';

import {generateICal} from './bmstu-schedule';

(async () => {
    const calendar = await generateICal('ИУ', '7', '53');

    console.log(calendar);
})();
