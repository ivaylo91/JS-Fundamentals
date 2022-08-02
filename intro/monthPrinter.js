function printMonths(month) {
    if (1 <= month && month <= 12) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[month - 1];
    }
    return "Error!";
}

console.log(printMonths(1));