const express = require('express');
const router = express.Router();
const app = express();
const questions = require('../../data/Questions');

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

module.exports = router;