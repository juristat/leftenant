/* eslint-env node, mocha */
const expect = require('chai').expect;
const EventEmitter = require('events').EventEmitter;
const Duplex = require('stream').Duplex;
const leftenant = require('./index.js');


describe('leftenant', () => {
  describe('function call support', () => {
    it('returns an object without throwing', () => expect(leftenant()).to.be.an('object'));
  });

  describe('Promise/thenable/async support', () => {
    it('has a .then', () => expect(leftenant().then).to.be.a('function'));
    it('has a .catch', () => expect(leftenant().catch).to.be.a('function'));
    it('resolves with an object', async () => expect(await leftenant()).to.be.an('object'));
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
    it('is an EventEmitter', () => expect(leftenant()).to.be.an.instanceOf(EventEmitter));
  });

  describe('stream.Duplex support', () => {
    it('is a stream.Duplex', () => expect(leftenant()).to.be.an.instanceOf(Duplex));
  });
});
