'use strict';

const { promisify } = require('util');

const esendex = require('esendex')({
    username: process.env.ESENDEX_USERNAME,
    password: process.env.ESENDEX_PASSWORD
});

const readMessages = promisify(esendex.inbox.get);
const sendMessage = promisify(esendex.messages.send);

module.exports = async (app, db) => {
    const pollInbox = async () => {
        const messages = await readMessages({ count: 5 });

        await Promise.map(readmessages.messageheader, async msg => {
            const message = await db.model('Sms'.findByIdAndUpdate(msg.id, msg, { upsert: true, new: true }));

            if (!message.replied) {
                const response = await sendMessage({
                    accountreference: process.env.ESENDEX_ACCOUNT,
                    message: [{
                        to: message.from.phonenumber,
                        body: 'Every message matters!'
                    }],
                });

                message.replied = true;
                return message.save();
                // send message
            }
        });
    }

    await pollInbox();
};