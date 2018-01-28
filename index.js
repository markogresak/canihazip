'use strict';

/**
 * Import HTTP interface module.
 *
 * TODO: Implement HTTPS. - has to be implemented on canihazip.com first.
 */
var protocol = require('https');

/**
 * Save reference to native Promise implementation or import promise module.
 *
 * @type {Promise}
 */
var Promise = Promise || require('promise');

/**
 * CanIHazIp constructor function.
 *
 * @param {Function=} callback (optional) Function to be called with IP data after server responds.
 *
 * @returns {Promise} Promise which is resolved with IP data after server responds.
 */
function CanIHazIp(callback) {

  return new Promise(function (resolve) {

    var httpCallback = function (response) {
      var responseData = '';
      // When data is received, append it to `responseData`.
      response.on('data', function (chunk) {
        responseData += chunk;
      });
      // When response ends, resolve returned Promise and call `callback` if it's a function.
      response.on('end', function () {
        resolve(responseData);
        if (typeof callback === 'function') {
          callback(responseData);
        }
      });
    };

    // Connect options for canihazip API, GET method is implicit.
    var canihazipOptions = {
      host: 'canihazip.com',
      path: '/s'
    };

    // Make a request to canihazip and end it immediately.
    protocol.request(canihazipOptions, httpCallback)
      .end();
  });
}

module.exports = CanIHazIp;
