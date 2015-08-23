var fs = require('fs'); // import fs module
var file = process.argv[2]; // import third argument from process.argv which is the input file name
var buffer = fs.readFileSync(file); // read the file synchronously and convert to a buffer
var fileText = buffer.toString(); // convert file buffer to string of text
var splitText = fileText.split('\n') // splits string fileText into an array using a newline as a delimeter (\n)

console.log(splitText.length-1); // use length-1 to count number of line breaks, not number of lines of text