/* eslint-env node, mocha */
const expect = require('chai').expect;
const EventEmitter = require('events').EventEmitter;
const Duplex = require('stream').Duplex;
const leftenant = require('./index.js');

function testThing(thing) {
  describe('function call support', () => {
    it('returns an object without throwing', () => expect(thing).to.be.an('object'));
  });

  describe('Promise/thenable/async support', () => {
    it('has a .then', () => expect(thing.then).to.be.a('function'));
    it('has a .catch', () => expect(thing.catch).to.be.a('function'));
    it('resolves with an object', async () => expect(await thing).to.be.an('object'));
  });

  describe('callback support', () => {
    it('calls back w/o error with an object', (done) => {
      leftenant((err, result) => {
        expect(result).to.be.an('object');
        done(err);
      });
    });
  });

  describe('EventEmitter support', () => {
    it('is an EventEmitter', () => expect(thing).to.be.an.instanceOf(EventEmitter));
  });

  describe('stream.Duplex support', () => {
    it('is a stream.Duplex', () => expect(thing).to.be.an.instanceOf(Duplex));
  });
}

describe('leftenant', () => {
  testThing(leftenant());
});

describe('leftenant.make()', () => {
  describe('object form', () => {
    const made = leftenant.make({ foo: true, bar: false, baz: true });
    testThing(made.foo);
    testThing(made.bar());
    testThing(made.baz);
  });

  describe('strings form', () => {
    const made = leftenant.make('foo', 'bar', 'baz');
    testThing(made.foo());
    testThing(made.bar());
    testThing(made.baz());
  });
});
