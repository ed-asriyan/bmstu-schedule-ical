# BMSTU Schedule iCalendar Generator [![Build Status](https://travis-ci.org/ed-asriyan/bmstu-schedule-ical.svg?branch=master)](https://travis-ci.org/ed-asriyan/bmstu-schedule-ical) [![dependencies Status](https://david-dm.org/ed-asriyan/bmstu-schedule-ical/status.svg)](https://david-dm.org/ed-asriyan/bmstu-schedule-ical)
The app generates [iCalendar](https://en.wikipedia.org/wiki/ICalendar) file with the schedule for a certain group in
BMSTU.

The working site is here: https://ed-asriyan.github.io/bmstu-schedule-ical

## Running the app
1. It requires [Node.js](https://nodejs.org/) with npm. Install it first.

2. Clone the repository:
```bash
git clone https://github.com/ed-asriyan/bmstu-schedule-ical
cd bmstu-schedule-ical
```

Now you can build and run the app, there are several ways to do it:

### Using docker
1. Build the docker image:
```bash
docker build -t bmstu-ical .
```

2. Run a container (replace `<PORT>` with port you want to listen):
```bash
docker run -p <PORT>:80 bmstu-ical
```

Open `http://localhost:<PORT>` in the browser.

### Using npm & node.js
1. Install dependencies:
```bash
npm install
```

2. Run the server (replace `<PORT>` with port you want to listen):
```bash
PORT=<PORT> npm start
```
And open `http://localhost:<PORT>` in the browser.


### Using a server
1. Install dependencies:
```bash
npm install
```

2. Generate bundle:
```bash
npm run generate_bundle
```

Generated files are located in `public/static` directory. For it to work properly, you should use them as static files
on your server, also you should configure `/proxy` URL path on the server as proxy to
`http://raspisanie.bmstu.ru:8088/`. Do it manually, or do the following to run with nginx:

3. Install nginx.

4. Copy generated files:
```bash
cp -R public/static/. /usr/html/
```

5. Copy nginx config:
```bash
cp nginx.conf /etc/nginx/nginx.conf
```

6. Restart nginx:
```bash
sudo service nginx restart
```

Open `http://localhost` in the browser.
