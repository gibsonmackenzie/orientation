var fs = require('fs');
var file = process.argv[2];
var numLines = 0

fs.readFile(file, function(error, data){
    if(error) throw error;
    var text = data.toString();
    // convert data to string of text
    var splitText = text.split('\n');
    // split string on newlines
    numLines = splitText.length-1;
    // count the number of line breaks
    console.log(numLines);
    //include console.log within the callback, otherwise value will change because it will run asynchonously

});

