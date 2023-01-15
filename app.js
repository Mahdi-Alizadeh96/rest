const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require('./routes/feedRoute');

const app = express();

app.use(bodyParser.json()); //For Json Response

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Cotent-Type, Authorization');
    next();
})

app.use("/feed", feedRoutes)

app.listen(3000);