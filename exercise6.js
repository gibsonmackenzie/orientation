var exportModule = require('./exportModule.js');

exportModule(process.argv[2], process.argv[3], function(err, data) {
    if (err) throw err;
    for (var i = 0 < data.length; i++) {
        console.log(data[i]);
    }
})



















