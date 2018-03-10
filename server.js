'use strict';

const express = require('express'),
	passport = require('passport'),
	path = require('path');

require('dotenv').config();

const app = express();

const GoogleStrategy = require('passport-google-oauth2').Strategy;

console.log(process.env.CLIENT_ID);

const strategy = new GoogleStrategy({
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	callbackURL: 'http://localhost:3000/auth/google/callback',
	passReqToCallback: true,
}, (request, accessToken, refreshToken, profile, done) => {
	console.log(profile);
	done();
});

passport.use(strategy, );

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.get('/bundle.js', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'dist/bundle.js'));
});

app.get('/auth/google',
	passport.authenticate('google', {
		scope: [],
	})
);

app.get('/auth/google/callback',
	passport.authenticate('google', { successRedirect: '/', failureRedirect: '/' })
);

const port = process.env.NODE_ENV || 3000;

app.listen(port);
console.log(`App is listening on http://localhost:${ port }`); // eslint-disable-line no-console
