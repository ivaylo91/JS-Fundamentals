function printNumbers(endInterval, startInterval) {
    let numbers = [];
    for (let i = endInterval; i >= startInterval; i--) {
        numbers.push(i);
    }
    return numbers.join("\n");
}

console.log(printNumbers(5, 1));