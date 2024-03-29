const path = require('path');
const express = require('express');

const app = express();

app.use('',express.static(path.join(__dirname, 'assets')));

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});

app.get('/auth/discord', (request, response) => {
	return response.sendFile('dashboard.html', { root: '.' });
});

const port = '3000';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
