var fs = require('fs'); // imports the fs core module
var path = require('path'); // imports the path core module
var dir = process.argv[2]; // get the directory path (first argument) to the script
var ext = process.argv[3]; // get the extension to filter for the second argument

fs.readdir(dir, function(error, data){ // asynchronously read input directory, when finished reading do a callback, using error and data (contents of directory, a list of files) as parameters
    if (error) throw error; // if an errors exists, an error message will be generated
    //console.log(data);
    ext = '.' + ext; // concatenate '.' to the extension name to create an exact match
    for (var i=0; i<data.length; i++){
       // console.log(path.extname(data[i]));
       
       // if the file extension matches, 
        if (path.extname(data[i]) == ext){
            console.log(data[i]);
        }
        
    }
});

