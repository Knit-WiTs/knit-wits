'use strict';

const express = require('express'),
	path = require('path');

const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client/index.html'));
})

const port = process.env.NODE_ENV || 3000;

app.listen(port);
console.log(`App is listening on http://localhost:${ port }`)
