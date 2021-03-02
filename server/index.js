const express = require('express');
const PersonService = require('./Person.service')
const app = express();
const port = 5050;

app.use(express.static(__dirname + './../'));

app.all('*', (req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`)

    next()
});

app.get('/person', PersonService.getPerson);
app.get('/person/name', PersonService.getPersonName);
app.get('/person/address', PersonService.getPersonAddress);
app.get('/person/post/recipient', PersonService.getPersonPostInfo);
// app.get('/person/:personValue', PersonService.getPersonValue);

app.listen(port, () => {
    console.log(`${port} started`)
});