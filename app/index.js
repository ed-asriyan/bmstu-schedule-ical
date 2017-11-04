/**
 * Created by ed on 04/11/2017.
 */

'use strict';

import './styles.scss';
import {saveAs} from 'file-saver';
import {generateICal} from './bmstu-schedule';

const button = document.getElementById('btn');
const groupInput = document.getElementById('group_input');

const parseInput = function (input) {
    const regex = /([а-яА-ЯЁё]+)(\d+)-(\d+)/;
    const match = regex.exec(input);

    return {
        faculty: match[1],
        department: match[2],
        groupNumber: match[3],
    }
};

button.addEventListener('click', async function () {
    const input = parseInput(groupInput.value);

    const ics = (await generateICal(input.faculty, input.department, input.groupNumber)).toString();

    const blob = new Blob([ics], {type: "text/calendar;charset=utf-8"});
    saveAs(blob, `BMSTU ${new Date().getFullYear()} ${input.faculty}${input.department}-${input.groupNumber}.ics`);
});
