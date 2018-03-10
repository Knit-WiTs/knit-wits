'use strict';

module.exports = {
	host: process.env.NODE_ENV === 'production' ? 'https://knit-wits.herokuapp.com' : 'http://localhost:3000',
};
