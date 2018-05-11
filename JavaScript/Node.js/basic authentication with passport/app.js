const express = require('express');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const db = require('./db');
const setupPassport = require('./setupPassport');
const flash = require('connect-flash');

const app = express();

setupPassport();

app.use(express.urlencoded({extended: false}));

app.use(session({
    secret: 'fnoanFUBOPFAbfINVANBnosfn',
    resave: true,
    saveUnitialized: true,
    store: new MongoStore({mongooseConnection: db.connection})
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(function(req, res, next) {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.user = req.user;
});