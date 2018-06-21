'use strict';
/**
 * This is a module to generate a gambling number
 * 
 * @module randomdice
 */
module.exports = {
  /**
   * generate a small number between 1 - 6 or a big between 1 - 20
   * 
   * @param {boolean} big big true when to generate a big number, small wen to generate a small number
   * @returns the number that is been generated
   */
  gambling(big) {
    return this.getRandomInt(big ? 20 : 6);
  },
  /**
   * This generates a random number
   * 
   * @param {number} max 
   * @returns random number
   */
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  },
};
