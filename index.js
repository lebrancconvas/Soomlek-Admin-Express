const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8000;
const questions = require('./data/Questions');
const logger = require('./middleware/logger');

// mongoose.connect('mongodb://localhost/ourdata');
// mongoose.Promise = global.Promise;

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// app.get('/admin', (req, res) => {
//     res.send(`API Testing.`);
// })


app.use(logger);

//GET Method. 
app.get('/api/questions', (req, res) => {
    res.json(questions);
});

app.get('/api/questions/:id', (req, res) => {
    let found = questions.some(question => question.id === parseInt(req.params.id));
    if (found) {
        res.json(questions.filter(question => question.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ message: `No Question with the ID of ${req.params.id}` });
    }
})

app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.json());

// app.use('/api', require('./routes/api'));

// app.use((err, req, res, next) => {
//     res.status(422).send({ error: err.message });
// })


app.listen(port, () => {
    console.log(`Server Listening at PORT ${port}`);
})