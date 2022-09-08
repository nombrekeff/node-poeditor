'use strict';

const request = require('../request').httprequest;

const addLanguage = async (token, id, lang) => {
  return new Promise((resolve, reject) => {
    if (!token) {
      const message = 'Error: You must define a valid API Token!';
      return reject(message);
    }

    if (!id) {
      const message = 'Error: You must define a valid project id!';
      return reject(message);
    }

    if (!lang) {
      const message = 'Error: You must define a valid languagecode!';
      return reject(message);
    }

    const req = {
      url: 'https://api.poeditor.com/v2/languages/add',
      method: 'POST',
      json: true,
      body: 'api_token=' + token + '&id=' + id + '&language=' + lang,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    request(req, (err) => {
      if (err) {
        return reject(err);
      }

      resolve(true);
    });
  });
};

module.exports = addLanguage;
