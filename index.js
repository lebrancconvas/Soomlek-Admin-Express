const express = require('express');
const app = express();
const port = process.env.PORT || 8001;

app.get('/', (req, res) => {
    res.send(`Test.`);
})

app.get('/admin', (req, res) => {
    res.send(`API Testing.`);
})

app.listen(port, () => {
    console.log(`Server Listening at PORT ${port}`);
})