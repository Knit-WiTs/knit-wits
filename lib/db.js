
'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	_id: Number,
	passphrase: String,
	trustedfiend: String,
}, { strict: false });

const incidentSchema = new mongoose.Schema({
	message: String,
	location: String,
	created_at: Date,
}, { strict: false });

const smsSchema = new mongoose.Schema({
	_id: String,
	replied: Boolean,
	from: {
		phonenumber: String,
	},
}, { strict: false });

mongoose.model('User', userSchema);
mongoose.model('Incident', incidentSchema);
mongoose.model('Sms', smsSchema);

let dbUri = process.env.DB_HOST || 'localhost:27017/knit-wits';

if (process.env.DB_USERNAME && process.env.DB_PASSWORD) {
	dbUri = `${ process.env.DB_USERNAME }:${ process.env.DB_PASSWORD }@${ dbUri }`;
}

module.exports = mongoose.connect(`mongodb://${ dbUri }`);
