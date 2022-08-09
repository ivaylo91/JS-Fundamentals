function printSum(startInterval, endInterval) {
    let sum = 0;
    let line = "";
    for (let i = startInterval; i <= endInterval; i++) {
        line += " " + i;
        sum += i;
    }
    return `${line}\n Sum:${sum}`;
}

console.log(printSum(5, 10));