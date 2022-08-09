function checkYearIsLeap(input) {
    if (input % 4 === 0 && input % 100 !==0 || input % 400 === 0) {
        return "yes";
    } else {
        return "no";
    }
}

console.log(checkYearIsLeap(1984));
console.log(checkYearIsLeap(2003));