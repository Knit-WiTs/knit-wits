'use strict';

const { ensureLoggedIn } = require('connect-ensure-login'),
	path = require('path');

module.exports = (app, db) => {
	app.post('/api/incident', ensureLoggedIn('/login'), async (req, res) => {
		const incident = new (db.model('Incident'))({
			_user: req.user._id,
			message: req.body.message,
			location: req.body.location,
			created_at: new Date(),
		});

		await incident.save();

		res.send(incident);
	});

	app.get('/api/incidents', ensureLoggedIn('/login'), async (req, res) => {
		const incidents = await db.model('Incident').find({ _user: req.user._id }).sort('-created_at');
		res.send(incidents);
	});

	app.get('/api/user', (req, res) => {
		if (!req.user) {
			return res.send(null);
		}

		res.send({
			id: req.user._id,
			name: {
				first: req.user.name.givenName,
				last: req.user.name.familyName,
			},
			email: req.user.email,
		});
	});

	app.get('/', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../dist/index.html'));
	});

	app.get('/*.js', (req, res) => {
		res.sendFile(path.join(__dirname, '../dist', req.url));
	});
};
