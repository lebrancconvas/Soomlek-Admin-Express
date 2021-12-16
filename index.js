const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8001;

mongoose.connect('mongodb://localhost/ourdata');
mongoose.Promise = global.Promise;

app.get('/', (req, res) => {
    res.send(`Test.`);
})

app.get('/admin', (req, res) => {
    res.send(`API Testing.`);
})



app.listen(port, () => {
    console.log(`Server Listening at PORT ${port}`);
})