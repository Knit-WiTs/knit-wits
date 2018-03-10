'use strict';

require('dotenv').config();

const express = require('express'),
	passport = require('passport');

const config = require('./lib/config'),
	dbConn = require('./lib/db');

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
		callbackURL: `${ config.host }/auth/google/callback`,
		passReqToCallback: true,
	}, async (request, accessToken, refreshToken, profile, done) => {
		const user = await db.model('User').findByIdAndUpdate(profile.id, profile, { new: true, upsert: true });
		done(null, user);
	}));

	require('./lib/esendex')(app, db);

	require('./lib/app')(app, db);
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`App is listening on ${ config.host }`); // eslint-disable-line no-console
