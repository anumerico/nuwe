'use strict';

const http = require('http');
const fs = require('fs');

const express = require('express');
const multer = require('multer');
const csv = require('fast-csv');
// require csvtojson module
const CSVToJSON = require('csvtojson');

const Router = express.Router;
const upload = multer({ dest: 'tmp/csv/' });
const app = express();
const router = new Router();
const server = http.createServer(app);
const port = 9000

router.post('/', upload.single('file'), function (req, res) {
  

 // convert csv file to JSON array
CSVToJSON().fromFile(req.file.path)
    .then(json => {

        // json is a JSON array
        // log the JSON array
        console.log(json);
    }).catch(err => {
        // log error if any
        console.log(err);
    });
});

app.use('/upload-csv', router);

// Start server
function startServer() {
  server.listen(port, function () {
    console.log('Express server listening on ', port);
  });
}

setImmediate(startServer);

