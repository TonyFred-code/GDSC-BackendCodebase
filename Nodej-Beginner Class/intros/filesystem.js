var fs = require('fs');
fs.rename(
    'myfile.md','myfile.txt' , function (err) {
        if (err)  throw err;
            console.log('Copied!.')
    }
    )