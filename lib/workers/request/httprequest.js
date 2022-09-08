'use strict';

const request = require('request');

const httpRequest = (opt, callback) => {
  if (!opt) {
    return callback('Error: You must define the request options!');
  }

  request(opt, (err, res) => {
    if (err) {
      return callback(err);
    }

    if (res.body.response.code !== '200') {
      return callback(res.body.response);
    }

    callback(null, res.body.result);
  });
};

module.exports = httpRequest;
