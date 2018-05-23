module.exports = function(gambling, guess) {
    if (guess === gambling) {
        console.log(`You won the lottery ... with ${guess}`);
    } else {
        console.log(`You loose the lottery ... ${guess} != ${gambling}`);
    }
}