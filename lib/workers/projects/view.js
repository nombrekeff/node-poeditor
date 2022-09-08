'use strict';

const request = require('../request').httprequest;

const viewProject = async (token, id) => {
  return new Promise((resolve, reject) => {
    if (!token) {
      const message = 'Error: You must define a valid API Token!';
      return reject(message);
    }

    if (!id) {
      const message = 'Error: You must define a valid project id!';
      return reject(message);
    }

    const req = {
      url: 'https://api.poeditor.com/v2/projects/view',
      method: 'POST',
      json: true,
      body: 'api_token=' + token + '&id=' + id,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    request(req, (err, res) => {
      if (err) {
        return reject(err);
      }

      resolve(res);
    });
  });
};

module.exports = viewProject;
