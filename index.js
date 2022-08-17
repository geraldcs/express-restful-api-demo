const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Sample home page');
})

app.listen(4000, () => {
    console.log('server has started');
})