// We've created node module for that helper
// Recommended to use that module
// But if you don't want to install that module, you can copy the helper and import it directly
// const SSE = require('@woolha.com/sse');

const express = require('express');
const app = express();
app.use(express.static('public'));

const SSE = require('../helpers/sse');
const Promise = require('bluebird')

app.get('/sse', (req, res, next) => {
  const sse = SSE(res);
  const messages = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  return Promise.each(messages, (message, index) => {
      sse.write(index, message);
      return Promise.delay(1000);
    })
    .then(() => {
      sse.end(100);
    })
    .catch(next);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});