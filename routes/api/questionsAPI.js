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
        options: [req.body.option1, req.body.option2, req.body.option3, req.body.option4],
        answer: req.body.answer
    }

    if (!newQuestion.question || !newQuestion.options || !newQuestion.answer) {
        return res.status(400).json({ message: `Please fill the information correctly.` });
    }

    questions.push(newQuestion);
    res.redirect('/');
})

//PUT Method 
router.put('/:id', (req, res) => {
    let found = questions.some(question => question.id === parseInt(req.params.id));
    if (found) {
        const updateQuestion = req.body;
        questions.forEach(question => {
            if (question.id === parseInt(req.params.id)) {
                question.question = updateQuestion ? updateQuestion.question : question.question;
                question.options = updateQuestion ? updateQuestion.options : question.options;
                question.answer = updateQuestion ? updateQuestion.answer : question.answer;

                res.json({ msg: `Question Update.`, question })
            }
        })
    } else {
        res.status(400).json({ msg: `No question with the ID of ${req.params.id}` });
    }
})

//DELETE Method
router.delete('/:id', (req, res) => {
    let found = questions.some(question => question.id === parseInt(req.params.id));

    if (found) {
        res.json({
            msg: "Delete Question",
            questions: questions.filter(question => question.id !== parseInt(req.params.id))
        })
    } else {
        res.status(400).json({ msg: `No user with the ID of ${req.params.id}` });
    }
})

module.exports = router;