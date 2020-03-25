const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
    request(
        { url: 'http://api.eventful.com/json/events/search?app_key=V8w6JvwNxm4VCX5H&keywords=books&location=San+Diego' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }
            res.json(JSON.parse(body));
        }
    )
});

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);