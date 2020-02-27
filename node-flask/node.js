const express = require('express');
const axios = require('axios');
const app = express();
app.get('/', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
        console.log(response.data);
        res.send('Done')
    }).catch((error) => {
        res.send('Error')
    })
});

app.listen(2011)