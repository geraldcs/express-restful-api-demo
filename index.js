// 1. require in Express
const express = require('express');
// 2. create an Express application
const app = express();
// 2a. inform Express that we are going to use JSON for request and response
app.use(express.json());
// 3. define some routes
app.get('/', function(req, res) {
    res.json({
        'message': 'Hello World'
    })
})

// 4. start the server
app.listen(4000, () => {
    console.log('server has started');
})