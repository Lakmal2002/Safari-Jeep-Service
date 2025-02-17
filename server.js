const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`node Server is running  ${port}`);
});