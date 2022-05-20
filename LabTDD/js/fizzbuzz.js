// Rules here: https://en.wikipedia.org/wiki/Fizz_buzz
const fizzbuz = (limit) => {
    let secventa = "";
    for (let i = 1; i <= limit; i++) {
        secventa += nextWord(i);
    }
    return secventa;
}

function nextWord(current) {
    if (current % 15 === 0) { // simplificare pentru ca divide si 3 si 5
       return "FizzBuzz";
    }
    if (current % 3 === 0) {
        return "Fizz";
    }
    if (current % 5 === 0) {
       return "Buzz";
    }
    return current;
}

module.exports = fizzbuz;
