import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';
import routes from './routes';
import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;

let app = express();
app.server = http.createServer(app);

// Middleware (just in case)

// Parse Application/JSON
app.use(bodyParser.json({
    limit: config.bodyLimit
}));

// Passport config
app.use(passport.initialize());
let Account = require('./model/account');
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  Account.authenticate()
));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// Removed CORS

// API routes v1
app.use('/api/v1', routes);

app.server.listen(config.port);
console.log(`Started on port ${app.server.address().port}`);

export default app;
