require_relative '../main'

=begin
 1から100までの数を順番に出力する
 3で割り切れる数の場合は数の代わりに"Fizz"を出力する
 5で割り切れる数の場合は数の代わりに"Buzz"を出力する
 3でも5でも割り切れる数の場合は"FizzBuzz"を出力する
=end

RSpec.describe FizzBuzz do
  context 'It output numbers from 1 to 100 in turn' do
    context 'when it can divide 3' do
      it 'should put Fizz' do
        expect(FizzBuzz.new.execute).to include "Fizz"
      end
    end
    context 'when it can divide 5' do
      it 'should put Buzz' do
        expect(FizzBuzz.new.execute).to include "Buzz"
      end
    end
    context 'when it can divide 3 and 5' do
      it 'should put FizzBuzz' do
        expect(FizzBuzz.new.execute).to include "FizzBuzz"
      end
    end
  end
end
