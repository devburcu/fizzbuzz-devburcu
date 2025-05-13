function fizzbuzzIf(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz"
    } else if (num % 3 === 0) {
        return "Fizz"
    } else if (num % 5 === 0) {
        return "Buzz"
    } else {
        return num
    }
}
console.log(fizzbuzzIf(30));
console.log(fizzbuzzIf(6));
console.log(fizzbuzzIf(10));
console.log(fizzbuzzIf(4));

module.exports = fizzbuzzIf;