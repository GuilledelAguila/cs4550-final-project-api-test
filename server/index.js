const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/event/search', (req, res) => {
    const location = req.query.location || 'USA';
    res.setHeader('Content-Type', 'application/json');
    request(
        { url: `http://api.eventful.com/json/events/search?app_key=V8w6JvwNxm4VCX5H&location=${location}` },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }
            res.json(JSON.parse(body));
        }
    )
});

app.get('/api/searchbyid', (req, res) => {
    const id = req.query.id || 'USA';
    res.setHeader('Content-Type', 'application/json');
    request(
        { url: `http://api.eventful.com/json/events/get?app_key=V8w6JvwNxm4VCX5H&id=${id}` },
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