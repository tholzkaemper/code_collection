/*
    Create a basic express app on port 3000.
*/

const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json);
app.use(express.urlencoded({extended: false}));
app.use(cookieParser);

app.get('/', function(req, res) {
    res.render('index');
});

let server = http.createServer(app);
server.listen(3000);