var fizzbuzz = function () {
  var arr = [];
  for(var i=1; i<=100; i++) {
    if((i%3) === 0){
      if((i%5) === 0){
        arr.push('FizzBuzz');
      } else {
        arr.push('Fizz');
      }
    } else if((i%5) === 0){
      if((i%3) === 0){
        arr.push('FizzBuzz');
      } else {
        arr.push('Buzz');
      }
    } else {
      arr.push(i);
    }
  }
  return arr;
};

exports.execute = fizzbuzz;
