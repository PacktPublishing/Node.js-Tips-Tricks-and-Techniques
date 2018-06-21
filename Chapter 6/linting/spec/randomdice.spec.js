'use strict';
const randomDice = require('../randomdice');

describe('We will test out randomdice', function() {

  it('should be calling getRandomInt', function() {
    const spy = spyOn(randomDice, 'getRandomInt').and.callFake(() => 5);
    const gamblingNumber = randomDice.gambling(true);
    expect(spy).toHaveBeenCalled();
    expect(gamblingNumber).toBe(5);
  });

  it('should be calling getRandomInt with 20', function() {
    const spy = spyOn(randomDice, 'getRandomInt').and.callFake(() => 5);
    randomDice.gambling(true);
    expect(spy).toHaveBeenCalledWith(20);
  });

  it('should be calling getRandomInt with 6', function() {
    const spy = spyOn(randomDice, 'getRandomInt').and.callFake(() => 5);
    randomDice.gambling(false);
    expect(spy).toHaveBeenCalledWith(6);
  });
});
