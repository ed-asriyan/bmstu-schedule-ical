/**
 * Created by ed on 04/11/2017.
 */

'use strict';

import './styles.scss';

import {generateICal} from './bmstu-schedule';

(async () => {
    const calendar = await generateICal('ИУ', '7', '53');
    document.body.innerHTML = `<textarea>${calendar.toString()}</textarea>`;
})();
