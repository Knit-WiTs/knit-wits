
'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	_id: Number,
}, { strict: false });

const messageSchema = new mongoose.Schema({}, { strict: false });

const smsSchema = new mongoose.Schema({
	_id: String,
	replied: Boolean,
}, { strict: false })

mongoose.model('User', userSchema);
mongoose.model('Message', messageSchema);
mongoose.model('Sms', messageSchema);

let dbUri = process.env.DB_HOST || 'localhost:27017/knit-wits';

if (process.env.DB_USERNAME && process.env.DB_PASSWORD) {
	dbUri = `${ process.env.DB_USERNAME }:${ process.env.DB_PASSWORD }@${ dbUri }`;
}

console.log(dbUri);

module.exports = mongoose.connect(`mongodb://${ dbUri }`);
