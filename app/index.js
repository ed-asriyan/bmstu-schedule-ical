/**
 * Created by ed on 04/11/2017.
 */

'use strict';

import './styles.scss';
import {saveAs} from 'file-saver';
import {generateICal} from './bmstu-schedule';

const parseInput = function (input) {
    const regex = /([а-яА-ЯЁё]+)(\d+)-(\d+)/;
    const match = regex.exec(input);

    if (!match || match.length !== 4) {
        return;
    }

    return {
        faculty: match[1].toUpperCase(),
        department: match[2],
        groupNumber: match[3],
    }
};

const getSchedule = async function (input) {
    const params = parseInput(input);
    if (!params) {
        throw 'Invalid group';
    }

    let ics;
    try {
        ics = (await generateICal(params.faculty, params.department, params.groupNumber)).toString();
    } catch (e) {
        throw 'Can not fetch this group';
    }

    try {
        const blob = new Blob([ics], {type: "text/calendar;charset=utf-8"});
        saveAs(blob, `BMSTU ${new Date().getFullYear()} ${params.faculty}${params.department}-${params.groupNumber}.ics`);
    } catch (e) {
        throw 'Can not save the .ics';
    }
};

const animInvalidInput = function () {
    const input = document.getElementById('group');
    const btn = document.getElementById('btn');

    btn.classList.add('btn__hidden');
    input.classList.add('form__field__invalid');
};

const animValidInput = function () {
    const input = document.getElementById('group');
    const btn = document.getElementById('btn');

    btn.classList.remove('btn__hidden');
    input.classList.remove('form__field__invalid');
};

const animFetching = function () {
    const input = document.getElementById('group');
    const btn = document.getElementById('btn');

    input.classList.add('form__field__hidden');
    btn.classList.remove('btn__hidden');
    btn.innerHTML = '...';
};

const animUserInput = function () {
    const input = document.getElementById('group');
    const btn = document.getElementById('btn');

    input.classList.remove('form__field__hidden');
    if (!input.value || parseInput(input.value)) {
        btn.classList.remove('btn__hidden');
    } else {
        btn.classList.add('btn__hidden');
    }
    btn.innerHTML = 'Get';
};

window.onInputInput = function () {
    const input = document.getElementById('group');

    if (!input.value || parseInput(input.value)) {
        animValidInput();
    } else {
        animInvalidInput();
    }
};

let isFetching = false;

window.onInputKeyPress = async function (e) {
    if (e.keyCode === 13) {
        if (isFetching) return;

        const input = document.getElementById('group');

        animFetching();

        isFetching = true;
        try {
            await getSchedule(input.value);
        } catch (e) {
            alert(e);
        }
        isFetching = false;

        animUserInput();
    }
};

window.onButtonClick = async function () {
    if (isFetching) return;

    const input = document.getElementById('group');

    animFetching();

    isFetching = true;
    try {
        await getSchedule(input.value);
    } catch (e) {
        alert(e);
    }
    isFetching = false;

    animUserInput();
};
