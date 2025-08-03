const greet = require('./t1/greeting');
const displayMessage = require('./t2/colorful');
const displayContent = require('./t3/read_file');

console.log(greet('Challenge Participant'));

console.log('\nDisplaying colorful messages:');
displayMessage();

console.log('\nReading file content:');
displayContent();