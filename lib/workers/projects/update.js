'use strict';

const request = require('../request').httprequest;

const updateProject = async (token, id, obj) => {
  return new Promise((resolve, reject) => {
    if (!token) {
      const message = 'Error: You must define a valid API Token!';
      return reject(message);
    }

    if (!id) {
      const message = 'Error: You must define a valid project id!';
      return reject(message);
    }

    if (!obj) {
      const message = 'Error: You must define a update object!';
      return reject(message);
    }

    let name = '';
    let description = '';
    let refLang = '';

    if (obj.name) {
      name = '&name=' + obj.name;
    }

    if (obj.description) {
      description = '&description=' + obj.description;
    }

    if (obj.refLang) {
      refLang = '&reference_language=' + obj.refLang;
    }

    const req = {
      url: 'https://api.poeditor.com/v2/projects/update',
      method: 'POST',
      json: true,
      body: 'api_token=' + token + '&id=' + id + name + description + refLang,
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

module.exports = updateProject;
