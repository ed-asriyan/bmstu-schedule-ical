/**
 * Created by pacman29 on 20.02.17.
 */

'use strict';

const express = require('express');
const request = require('request');
const app = express();

const routes = ['/'];

app.use('/', express.static('dist'));

app.get(/^\/proxy\/(.*)/, function (req, res) {
    request(`http://raspisanie.bmstu.ru:8088${req.originalUrl.slice(6)}`).pipe(res);
});
module.exports = app;
