const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Welcome to the home page");
});

app.get('/hello', (req,res) => {
    res.send("Welcome the  page");
})

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Hello World");
});