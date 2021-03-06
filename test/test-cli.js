/* jshint expr: true */
'use strict';
var chai = require('chai');
var sinon = require('sinon');
chai.should();
chai.use(require('sinon-chai'));
chai.use(require('chai-as-promised'));

var CLI = require('../cli');

describe('CanIHazIp CLI', function () {

  beforeEach(function () {
    // Stub console log and info methods.
    sinon.stub(console, 'log');
    sinon.stub(console, 'info');
  });

  afterEach(function () {
    // Restore stubbed methods.
    console.log.restore();
    console.info.restore();
  });

  it('should have a static help message property', function () {
    CLI.helpMessage.should.be.a('string');
    CLI.helpMessage.should.not.be.empty;
  });

  it('instance should have a run function', function () {
    var cli = new CLI();
    cli.run.should.exist;
  });

  it('should output a help message when ran with options -h, --help or help', function () {
    ['-h', '--help', 'help'].forEach(function (helpArg) {
      // Instantiate a CLI for each of expected options and assert that
      // console.info was passed the `helpMessage`.
      var helpCLI = new CLI([helpArg]);
      helpCLI.run();
      console.info.should.have.been.calledWith(CLI.helpMessage);
    });
  });

  it('should resolve with IPv4 when not called with help options', function () {
    ['', '123', 'abc', 'canihazip'].forEach(function (arg) {
      // Instantiate a CLI with options (can be arbitrary) and assert that
      // the returned value matches a IPv4 value.
      var cli = new CLI([arg]);
      var canihazipPromise = cli.run();
      var IP4Regexp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      canihazipPromise.should.have.been.eventually.calledWith(sinon.match(IP4Regexp));
    });
  });

});
