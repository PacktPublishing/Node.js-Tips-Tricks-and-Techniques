const log = require('../log');

describe("We will test out log", function() {
    it("should test console output", function () {
        console.log = jasmine.createSpy("log");
        log(4, 4);
        expect(console.log).toHaveBeenCalledWith(`You won the lottery ... with ${4}`);
    });
});