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

util.inherits(Leftenant, Duplex);

module.exports = Leftenant;
