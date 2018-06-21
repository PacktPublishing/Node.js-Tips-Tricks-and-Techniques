'use strict';
module.exports = {
  gambling(big) {
    return this.getRandomInt(big ? 20 : 6);
  },
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  },
};
