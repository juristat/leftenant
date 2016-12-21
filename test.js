/* eslint-env node, mocha */
/* eslint-disable no-unused-expressions */
const http = require('http');
const expect = require('chai').expect;
const EventEmitter = require('events').EventEmitter;
const Duplex = require('stream').Duplex;
const leftenant = require('./index.js');

describe('leftenant', () => {
  describe('function call support', () => {
    it('returns an object without throwing', () => expect(leftenant()).to.be.an('object'));
  });

  describe('Promise/thenable/async support', () => {
    const instance = leftenant();
    it('has a .then', () => expect(instance.then).to.be.a('function'));
    it('has a .catch', () => expect(instance.catch).to.be.a('function'));
    it('resolves with an object', async () => expect(await instance).to.be.an('object'));
  });

  describe('callback support', () => {
    it('calls back with an object', (done) => {
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

  describe('Connect-style middleware support', () => {
    it('calls the middleware with no args', (done) => {
      const req = new http.IncomingMessage();
      const res = new http.ServerResponse(req);
      leftenant(req, res, (...args) => {
        expect(args.length).to.be.empty;
        done();
      });
    });
  });

  describe('Koa-style middleware support', () => {
    it('calls the middleware with no args', (done) => {
      const req = new http.IncomingMessage();
      const res = new http.ServerResponse(req);
      leftenant({ req, res }, (...args) => {
        expect(args.length).to.be.empty;
        done();
      });
    });
  });
});

describe('leftenant.make()', () => {
  describe('object form', () => {
    it('creates object correctly', () => {
      const made = leftenant.make({ foo: true, bar: false });
      expect(made.foo).to.be.an.instanceOf(leftenant);
      expect(made.bar).to.not.be.an.instanceOf(leftenant);
    });
  });

  describe('strings form', () => {
    it('creates object correctly', () => {
      const made = leftenant.make('foo', 'bar');
      expect(made.foo).to.not.be.an.instanceOf(leftenant);
      expect(made.bar).to.not.be.an.instanceOf(leftenant);
    });
  });
});
