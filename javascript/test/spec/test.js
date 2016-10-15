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
  describe('It output numbers from 1 to 100 in turn', function () {
    describe('when it can divide 3', function () {
      it('should put Fizz', function () {
        expect(fizzbuzz.execute()).to.include('Fizz');
      });
    });
    describe('when it can divide 5', function () {
      it('should put Buzz', function () {
        expect(fizzbuzz.execute()).to.include('Buzz');
      });
    });
    describe('when it can divide 3 and 5', function () {
      it('should put FizzBuzz', function () {
        expect(fizzbuzz.execute()).to.include('FizzBuzz');
      });
    });
  });
})();
