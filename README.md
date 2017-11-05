## BMSTU Schedule iCalendar Generator [![Build Status](https://travis-ci.org/ed-asriyan/bmstu-schedule-ical.svg?branch=master)](https://travis-ci.org/ed-asriyan/bmstu-schedule-ical)
The app generates [iCalendar](https://en.wikipedia.org/wiki/ICalendar) file with the schedule for a certain group in
BMSTU.

The working site is here: https://bmstu-ical.herokuapp.com

### Running the app
It requires nodejs with npm installed.
In order to run the app you need to install dependencies with:
```bash
npm install
```

Now you can run the server:
```bash
npm start
```
And open http://localhost:3000 in the browser.

Also you can generate bundle only, without running the server:
```bash
npm run generate_bundle
```
