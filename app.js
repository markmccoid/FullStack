const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/demo', (req,res) => {
	res.set('X-full-stack', 'customer header data');
	res.status(418);
	res.send('418---Result');
});

app.listen(port, () => console.log('Example app listening on port ${port}'));
