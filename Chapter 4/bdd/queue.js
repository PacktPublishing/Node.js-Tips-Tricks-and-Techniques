module.exports = class Queue {

    constructor(length) {
        this.length = length;
        this.size = 0;
        this.items = [];
    }

    add(item) {
        let poppedElement;
        if ( this.items.length === this.length ) {
            poppedElement = this.items[this.items.length-1];
        }
	    this.items.push(item);
        this.size = this.items.length;
        return poppedElement;
    }
}