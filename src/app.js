'use strict';

let http = require('http');

const router = require('../src/lib/router.js');
const api = require('./api/api.js');

let isRunning = false;
console.log(api);

const app = http.createServer(router.route);

module.exports = {
  start: (port) => {
    if (!isRunning) {
      app.listen(port, (err) => {
        if (err) { throw err; }

        isRunning = true;
        console.log('Server is up on port ', port);
      });
    }
    else {
      console.log('Server is already running');
    }
  },

  stop: () => {
    app.close(() => {
      isRunning = false;
      console.log('Server has stopped');
    });
  },
};