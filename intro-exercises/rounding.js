function printNumber(number, precision) {

    return parseFloat(number.toFixed(precision));
}

console.log(printNumber(3.14159265358979323846, 2));
console.log(printNumber(10.5,3));