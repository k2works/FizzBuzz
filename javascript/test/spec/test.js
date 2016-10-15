/*
 1から100までの数を順番に出力する
 3で割り切れる数の場合は数の代わりに"Fizz"を出力する
 5で割り切れる数の場合は数の代わりに"Buzz"を出力する
 3でも5でも割り切れる数の場合は"FizzBuzz"を出力する
 */
var chai = require('../../bower_components/chai/chai')
  , should = chai.should()
  , expect = chai.expect;
var fizzbuzz = require('../../app/scripts/main');

(function () {
  'use strict';
  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        expect(fizzbuzz.execute()).to.equal('fizzbuzz');
      });
    });
  });
})();
