const express = require('express');
const path = require('path');

const app = express();

const answer = require("./index.js");

app.listen(3000, () => {
  console.log('server started');
});

app.get('/', (req, res) => {
  res.send(answer("SERR YBIR? NPPVBWBO"))
});
