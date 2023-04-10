// Importing modules
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const router = require('./routers/router');

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({
    origin: ["127.0.0.1:5500"]
}));

app.use(router);

// Starting server
app.listen(port)