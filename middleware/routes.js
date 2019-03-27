'use strict';

const express = require('express');
const faker = require('faker');
const requestTime = require('./requestTime.js');
const router = express.Router();

router.get('/c',requestTime,randomNum,(req,res) => {
  res.status(200).send(req.body);
});

router.get('/d',requestTime,throwErr,(req,res) => {
  res.status(200).send(req.body);
});


function throwErr(req,res,next){
  next('Bloop');
}

function randomNum(req,res,next) {
  let randomNumber = faker.random.number(100);
  console.log(randomNumber);
  next();
}

module.exports = router;