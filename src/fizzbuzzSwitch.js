function fizzbuzzSwitch(num) {
    switch (true){
        case (num % 3 === 0 && num % 5 === 0):
            return "FizzBuzz";
        case (num % 3 === 0):
            return "Fizz";
        case (num % 5 === 0):
            return "Buzz";
        default:
            return num
    }
}
console.log(fizzbuzzSwitch(30));
console.log(fizzbuzzSwitch(6));
console.log(fizzbuzzSwitch(10));
console.log(fizzbuzzSwitch(4));

module.exports = fizzbuzzSwitch;