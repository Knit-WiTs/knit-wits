'use strict';

const Promise = require('bluebird');

const config = require('./config');

const esendex = require('esendex')({
	username: process.env.ESENDEX_USERNAME,
	password: process.env.ESENDEX_PASSWORD,
});

const readMessages = (...args) => new Promise((resolve, reject) => esendex.inbox.get(...args, (err, response) => {
	if (err) {
		reject(err);
	}

	resolve(response.messageheader);
}));

const sendMessage = (...args) => new Promise((resolve, reject) => esendex.messages.send(...args, (err, response) => {
	if (err) {
		console.log(err);
		reject(err);
	}

	resolve(response);
}));

module.exports = async (app, db) => {
	const pollInbox = async () => {
		console.log('Checking SMS inbox');

		const messages = await readMessages({ count: 5 });

		console.log(`Retrieved ${ messages.length } messages`);

		await Promise.all(messages.map(async msg => {
			const message = await db.model('Sms').findByIdAndUpdate(msg.id, msg, { upsert: true, new: true });

			if (!message.replied) {
				console.log(`Received a new message from ${ message.from.phonenumber }`);

				await sendMessage({
					accountreference: process.env.ESENDEX_ACCOUNT,
					message: [{
						to: message.from.phonenumber,
						body: `Please go to this link to sign up: \n ${ config.host }/login \n Don\t forget to delete this message once you have logged in!`,
					}],
				});

				console.log(`Sent a welcome message to ${ message.from.phonenumber }`);

				message.replied = true;
				return message.save();
				// send message
			}
		}));

		await Promise.delay(1 * 60 * 1000);

		return pollInbox();
	};

	await pollInbox();
};
