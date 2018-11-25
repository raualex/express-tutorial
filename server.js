const express = require('express');
const app = express();

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static('public'))

app.get('/', (request, response) => {
//   response.send('hello world');
});

app.get('/json', (request, response) => {
  response.sendFile('public/info.json', {root: __dirname })
});

app.get('/sunsets', (request, response) => {
  response.sendFile('public/sunsets.html', {root: __dirname })
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.use(function (request, response, next) {
    response.sendFile('public/404.html', {root: __dirname })
  })