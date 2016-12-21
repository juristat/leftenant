/* eslint-disable no-console, comma-dangle */
const util = require('util');
const Duplex = require('stream').Duplex;

function Leftenant(...args) {
  if (!(this instanceof Leftenant)) {
    return new Leftenant(...args);
  }

  if (args.length > 0) {
    const last = args[args.length - 1];
    if (typeof last === 'function') {
      last(null, {}); // callback support!
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
