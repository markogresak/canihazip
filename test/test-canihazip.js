/* jshint expr: true */
'use strict';
var chai = require('chai');
var sinon = require('sinon');
chai.should();
chai.use(require('sinon-chai'));
chai.use(require('chai-as-promised'));

var canihazip = require('../');

describe('canihazip node module', function () {

  var IP4Regexp, callbackSpy, canihazipPromise;

  beforeEach(function (done) {
    IP4Regexp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    callbackSpy = sinon.spy();
    canihazipPromise = canihazip(callbackSpy)
      .then(function () {
        done();
      });
  });

  it('should call a callback with a string value matching IPv4', function () {
    callbackSpy.should.have.been.calledWith(sinon.match(IP4Regexp));
  });

  it('should return a promise', function () {
    canihazipPromise.then.should.exist;
  });

  it('should resolve a promise with IPv4 value', function () {
    canihazipPromise.should.have.been.eventually.calledWith(sinon.match(IP4Regexp));
  });

});
