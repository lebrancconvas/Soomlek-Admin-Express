const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8000;
const questions = require('./data/Questions');

// mongoose.connect('mongodb://localhost/ourdata');
// mongoose.Promise = global.Promise;

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// app.get('/admin', (req, res) => {
//     res.send(`API Testing.`);
// })

//GET Method. 
app.get('/api/questions', (req, res) => {
    res.json(questions);
});

app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.json());

// app.use('/api', require('./routes/api'));

// app.use((err, req, res, next) => {
//     res.status(422).send({ error: err.message });
// })


app.listen(port, () => {
    console.log(`Server Listening at PORT ${port}`);
})