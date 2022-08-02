function printNumbers(startInterval, endInterval) {
    let numbers = [];
    for (let i = startInterval; i <= endInterval; i++) {
        numbers.push(i);
    }

    return numbers.join("\n");

}

console.log(printNumbers(1, 5));