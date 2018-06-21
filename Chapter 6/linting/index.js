'use strict';
const log = require('./log');
const randomDice = require('./randomdice');

const gambling = randomDice.gambling(true);
log(gambling, process.argv[2]);
