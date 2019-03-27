'use strict';

const express = require('express');
const requestTime = require('./requestTime.js');
const routes = require('./routes.js');

const app = express();
app.use(routes);
const PORT = process.env.PORT || 3000;

const squareMe = (num) => {
  num *= num;
  return (req,res,next) => {
    req.body.number = num;
    next();
  };
};

app.get('/a',requestTime, (req,res) => {
  res.status(200).send(req.body);
});

app.get('/b',requestTime,squareMe(2), (req,res) => {
  res.status(200).send(req.body.number.toString());
});


//Not Found Handler
app.use('*', (req,res,next) => {
  res.status(404).send('Wat...');
});
//Error Handler
app.use( (err,req,res,next) => {
  res.status(500).send(err);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

