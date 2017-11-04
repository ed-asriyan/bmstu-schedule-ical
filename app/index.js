/**
 * Created by ed on 04/11/2017.
 */

'use strict';

import './styles.scss';
import {saveAs} from 'file-saver';
import {generateICal} from './bmstu-schedule';

const button = document.getElementById('btn');
const groupInput = document.getElementById('group');

const parseInput = function (input) {
    const regex = /([а-яА-ЯЁё]+)(\d+)-(\d+)/;
    const match = regex.exec(input);

    if (!match || match.length !== 4) {
        throw 0;
    }

    return {
        faculty: match[1],
        department: match[2],
        groupNumber: match[3],
    }
};

button.addEventListener('click', async function () {
    let input;
    try {
        input = parseInput(groupInput.value);
    } catch (e) {
        alert('Invalid group');
        return;
    }

    let ics;
    try {
        ics = (await generateICal(input.faculty, input.department, input.groupNumber)).toString();
    } catch (e) {
        alert('Can not fetch this group');
        return;
    }

    try {
        const blob = new Blob([ics], {type: "text/calendar;charset=utf-8"});
        saveAs(blob, `BMSTU ${new Date().getFullYear()} ${input.faculty}${input.department}-${input.groupNumber}.ics`);
    } catch (e) {
        alert('Can not save the .ics');
        return;
    }
});
