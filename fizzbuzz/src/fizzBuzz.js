var FizzBuzz = function() {
}

  FizzBuzz.prototype.print = function() {
    var array = [];
    for (var i = 1; i < 101; i++) {
      // log the numbers 1 through 100
      array.push(this.checkFizzBuzz(i));
    }
    console.log(array);
    return array;
  };

  FizzBuzz.prototype.checkFizzBuzz = function(num) {
    return (num % 15 === 0 ? "FizzBuzz" : num % 5 === 0 ? "Buzz" : num % 3 === 0 ? "Fizz" : num);
  };
