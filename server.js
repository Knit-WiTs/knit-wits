'use strict';

require('dotenv').config();

const express = require('express'),
	passport = require('passport');

const dbConn = require('./lib/db');

const app = express();

app.use(passport.initialize());
app.use(passport.session());

const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((obj, done) => {
	done(null, obj);
});

dbConn.then(db => {
	passport.use(new GoogleStrategy({
		clientID: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		callbackURL: 'http://localhost:3000/auth/google/callback',
		passReqToCallback: true,
	}, async (request, accessToken, refreshToken, profile, done) => {
		const user = await db.model('User').findByIdAndUpdate(profile.id, profile, { new: true, upsert: true })
		done(null, user);
	}));

	require('./lib/app')(app, db);
});

const port = process.env.NODE_ENV || 3000;

app.listen(port);
console.log(`App is listening on http://localhost:${ port }`); // eslint-disable-line no-console
