'use strict';

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
		const messages = await readMessages({ count: 5 });

		await Promise.all(messages.map(async msg => {
            const message = await db.model('Sms').findByIdAndUpdate(msg.id, msg, { upsert: true, new: true });

			if (!message.replied) {
                console.log(message.from);

				const response = await sendMessage({
					accountreference: process.env.ESENDEX_ACCOUNT,
					message: [{
						to: message.from.phonenumber,
						body: 'Every message matters!',
					}],
				});

				console.log(response);

				message.replied = true;
				return message.save();
				// send message
			}
		}));
	};

	await pollInbox();
};
