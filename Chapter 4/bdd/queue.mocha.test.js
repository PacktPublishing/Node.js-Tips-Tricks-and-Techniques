const Queue = require('./queue');
const chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

describe('FIFO Queue', function() {
    describe('adding elements', function () {
      
        it('should add an element when size is not full', function () {
            let queue = new Queue(3), originalSize;
            originalSize = queue.size;
            const returnValue = queue.add("something");

            expect(returnValue).to.be.undefined;
            queue.size.should.be.equal(originalSize + 1);
        });
    
    });

});