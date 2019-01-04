'use strict';

const http = require('http');
const { exec } = require('child_process');

exec('start chrome', (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        console.log(err);
        return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});

http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end();
    console.log('recieved request');
}).listen(8080);