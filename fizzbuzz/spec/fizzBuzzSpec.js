describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should return a a list from 1 to 100", function() {
    expect(fizzBuzz.print()).toContain(67);
  });

  it("should return fizz instead of any number divisible by 3", function() {
    expect(fizzBuzz.checkFizzBuzz(9)).toEqual('Fizz');
    expect(fizzBuzz.checkFizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz.checkFizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz.checkFizzBuzz(34)).toEqual(34);
    expect(fizzBuzz.checkFizzBuzz(39)).toEqual('Fizz');
  });

});
