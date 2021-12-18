const express = require('express');
const router = express.Router();
const app = express();
const questions = require('../../data/Questions');
const uuid = require('uuid');

//GET Method. 
router.get('/', (req, res) => {
    res.json(questions);
});

router.get('/:id', (req, res) => {
    let found = questions.some(question => question.id === parseInt(req.params.id));
    if (found) {
        res.json(questions.filter(question => question.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ message: `No Question with the ID of ${req.params.id}` });
    }
})

//POST Method 
router.post('/', (req, res) => {
    const newQuestion = {
        id: uuid.v4(),
        question: req.body.question,
        options: req.body.options,
        answer: req.body.answer
    }

    if (!newQuestion.question || !newQuestion.options || !newQuestion.answer) {
        return res.status(400).json({ message: `Please fill the information correctly.` });
    }

    questions.push(newQuestion);
    res.json(questions);
})

module.exports = router;