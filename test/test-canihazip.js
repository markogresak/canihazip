/* jshint expr: true */
'use strict';
var chai = require('chai');
chai.should();

var canihazip = require('../');

describe('canihazip node module', function () {

  it('should return a string matching IPv4', function () {
    var IP4Regexp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    var ip = canihazip();
    ip.shoud.be.a('string');
    ip.should.match(IP4Regexp);
  });

});
