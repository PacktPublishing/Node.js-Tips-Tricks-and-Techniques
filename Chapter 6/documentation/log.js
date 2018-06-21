'use strict';
/**
* This is a module that writes a log depending on the gambling number and the guess of the end user
*
* @param {number} gambling the random gambling number
* @param {number} guess the guess of the end user
* @module log
*/
module.exports = function(gambling, guess) {
  if (guess === gambling) {
    console.log(`You won the lottery ... with ${guess}`);
  } else {
    console.log(`You loose the lottery ... ${guess} != ${gambling}`);
  }
};
