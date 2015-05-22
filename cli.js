#!/usr/bin/env node

'use strict';

function CLI(args) {
  /**
   * Array of expected help arguments
   *
   * @type {Array<String>}
   */
  this.helpArgs = ['-h', '--help', 'help'];

  /**
   * Arguments to CLI, fallback to empty array.
   *
   * @type {Array<String>}
   */
  this.args = args || [];
}

/**
 * Static help message property.
 *
 * @type {String}
 */
CLI.helpMessage = [
    'Usage: canihazip [options]',
    '    [no options]:        Get public IP for this machine.',
    '    -h | --help | help:  Print this help message.'
  ].join('\n');

/**
 * Run CLI with given args.
 *
 * @returns {Promise} Promise from canihazip request.
 */
CLI.prototype.run = function () {
  // Check if first argument matches any of help args, if it does, output help message.
  if (this.helpArgs.indexOf(this.args[0]) >= 0) {
    console.info(CLI.helpMessage);
  }
  // There was no help options, get IP using canihazip and output it to stdout.
  else {
    var canihazip = require('./');
    return canihazip(console.log);
  }
};

// If run directly, i.e. as node cli.js or ./cli.js, run CLI.
// Source: https://nodejs.org/docs/latest/api/all.html#all_accessing_the_main_module
if (require.main === module) {
  new CLI(process.argv.slice(2))
    .run();
}

module.exports = CLI;
