const express = require('express');
const { request, response } = require('express')

let app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (request, response) => {
  console.log('Hi');
  response.end();
});
app.listen(3000, () => {
  console.log('Server is up!');
});