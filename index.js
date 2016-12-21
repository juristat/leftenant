/* eslint-disable no-console, comma-dangle */
const util = require('util');
const { IncomingMessage, ServerResponse } = require('http');
const { Duplex } = require('stream');

function Leftenant(...args) {
  if (!(this instanceof Leftenant)) {
    return new Leftenant(...args);
  }

  if (args.length > 0) {
    const callback = args[args.length - 1];

    if (typeof callback === 'function') {
      const ctx = args[0];
      const [req, res] = args;
      const isKoa = ctx && ctx.req instanceof IncomingMessage && ctx.res instanceof ServerResponse;
      const isConnect = req instanceof IncomingMessage && res instanceof ServerResponse;

      if (isKoa || isConnect) {
        callback();
      } else {
        callback(null, {});
      }
    }
  }
}

Leftenant.prototype.then = (resolve) => { resolve({}); };
Leftenant.prototype.catch = () => {};

Leftenant.make = (...args) => {
  const result = {};
  args.forEach((arg) => {
    if (typeof arg === 'string') {
      result[arg] = Leftenant;
    } else if (typeof arg === 'object') {
      Object.keys(arg).forEach((key) => {
        result[key] = arg[key] ? Leftenant() : Leftenant;
      });
    }
  });
  return result;
};

util.inherits(Leftenant, Duplex);

console.error(`
/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
| leftenant, a placeholder utility, is enabled; this message is a reminder.
| 1st parent module = ${module.parent.filename || '(REPL?)'}
\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`);

module.exports = Leftenant;
