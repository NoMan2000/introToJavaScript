(function (){
    'use strict';
    var express = require('express');
    var app = express();
    var port = process.env.PORT || 5000;

    /**
     * Use static files
     */
    app.use(express.static('./'));

    app.get('/', function (req, res) {
        res.send("hello World");
    });

    app.listen(port, function (err) {
        if (err) {
            throw err;
        }
        console.log('Running server on ' + port);
    });
}());
