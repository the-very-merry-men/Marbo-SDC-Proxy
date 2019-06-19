require('newrelic');
const express = require('express');

const app = express();
const port = 3010;
const cors = require('cors');
proxy = require('http-proxy-middleware');

app.use(cors());

app.use(express.static('public'));

app.use('/api/stocks/', proxy('http://ec2-18-222-193-177.us-east-2.compute.amazonaws.com:3111/api/stocks/'));
app.use('/api/increments/', proxy('http://ec2-18-222-193-177.us-east-2.compute.amazonaws.com:3111/api/increments/'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
