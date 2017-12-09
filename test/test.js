'use strict';

var expect = require('chai').expect;
require('mocha-sinon');
var helloWorld = require('../index');

describe('#helloWorld', function() {

    beforeEach(function() {
        this.sinon.stub(console, 'log');
    });

    it('should display Hello World', function() {
        helloWorld();
        expect( console.log.calledOnce ).to.be.true;
        expect( console.log.calledWith('Hello World') ).to.be.true;
    });
});