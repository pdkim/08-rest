'use strict';

require('dotenv').config();

const app = require('./src/app.js').start(process.env.PORT);

