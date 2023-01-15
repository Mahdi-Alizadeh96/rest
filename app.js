const express = require("express");

const feedRoutes = require('./routes/feedRoute');

const app = express();

app.use("/feed", feedRoutes)

app.listen(3000);