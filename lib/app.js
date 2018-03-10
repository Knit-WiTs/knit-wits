'use strict';

const passport = require('passport'),
	path = require('path');

module.exports = (app, db) => {
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../dist/index.html'));
	});

	app.get('/*.js', (req, res) => {
		res.sendFile(path.join(__dirname, '../dist', req.url));
	});

	app.get('/login',
		passport.authenticate('google', {
			scope: [
				'https://www.googleapis.com/auth/userinfo.email',
				'https://www.googleapis.com/auth/user.phonenumbers.read',
				'https://www.googleapis.com/auth/userinfo.profile',
			],
		})
	);

	app.get('/auth/google/callback',
		passport.authenticate('google', { successRedirect: '/', failureRedirect: '/' })
	);
};
