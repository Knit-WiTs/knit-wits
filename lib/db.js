
'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	_id: Number,
}, { strict: false });
const messageSchema = new mongoose.Schema({}, { strict: false });

mongoose.model('User', userSchema);
mongoose.model('Message', messageSchema);

module.exports = mongoose.connect('mongodb://localhost:27017/knit-wits');
