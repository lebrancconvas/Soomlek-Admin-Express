const express = require('express');
const router = express.Router;


router.get('/quiz', (req, res) => {
    res.send({ type: "GET" });
});

router.post('/quiz', (req, res) => {

})