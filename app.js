const express     = require('express');
const path        = require('path');
const logger      = require('morgan');
const favicon     = require('static-favicon');
const passport    = require('passport');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const autRoutes   = require('./server/routes/auth');
const config      = require('./config');

// connect to the database and load models
require('./server/models').connect(config.dbUri);

const app = express();
// use default favicon
app.use(favicon());
app.use(logger('dev'));
// tell the app to look for static files in these directories
app.use(express.static(path.join(__dirname, 'client/dist/')));
app.use(express.static(path.join(__dirname, 'server/static/')));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localRegisterStrategy = require('./server/passport/local-register');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-register', localRegisterStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
