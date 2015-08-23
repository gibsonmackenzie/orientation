var fs = require('fs'); // imports the fs core module
var path = require('path'); // imports the path core module
var http = require('http'); // imports the http core module
var dir = process.argv[2]; // get the directory path (first argument) to the script
var ext = process.argv[3]; // get the extension to filter for the second argument
