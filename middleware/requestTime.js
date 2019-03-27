'use strict';

module.exports = (req,res,next) => {
  let date = new Date();
  req.body = {requestTime: date.toUTCString()};
  console.log(req.method, req.path, req.body);
  next();
};