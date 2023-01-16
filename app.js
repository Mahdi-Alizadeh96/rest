const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require('./routes/feedRoute');

const app = express();

app.use(bodyParser.json()); //For Json Response

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use("/feed", feedRoutes)

app.listen(8080);