function calc(groupOfPeople, typeOfGroup, dayOfWeek) {
    let totalPrice = 0;
    let price = 0;
    if (typeOfGroup === "Students") {
        if (dayOfWeek === "Friday") {
            price = 8.45;
            totalPrice = groupOfPeople * price;
            if (groupOfPeople >= 30) {
                totalPrice = totalPrice - totalPrice * 0.15;
            }
        } else if (dayOfWeek === "Saturday") {
            price = 9.80;
            totalPrice = groupOfPeople * price;
            if (groupOfPeople >= 30) {
                totalPrice = totalPrice - totalPrice * 0.15;
            }
        } else if (dayOfWeek === "Sunday") {
            price = 10.46;
            totalPrice = price * groupOfPeople;
            if (groupOfPeople >= 30) {
                totalPrice = totalPrice - totalPrice * 0.15;
            }
        }
    } else if (typeOfGroup === "Business") {
        if (dayOfWeek === "Friday") {
            price = 10.90;
            totalPrice = groupOfPeople * price;
            if (groupOfPeople >= 100) {
                totalPrice = totalPrice - (totalPrice - 10);
            }
        } else if (dayOfWeek === "Saturday") {
            price = 15.60;
            totalPrice = groupOfPeople * price;
            if (groupOfPeople >= 100) {
                totalPrice = totalPrice - (totalPrice - 10);
            }
        } else if (dayOfWeek === "Sunday") {
            price = 16;
            totalPrice = price * groupOfPeople;
            if (groupOfPeople >= 100) {
                totalPrice = totalPrice - (totalPrice - 10);
            }
        }
    } else if (typeOfGroup === "Regular") {
        if (dayOfWeek === "Friday") {
            price = 15;
            totalPrice = groupOfPeople * price;
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalPrice = totalPrice - totalPrice * 0.5;
            }
        } else if (dayOfWeek === "Saturday") {
            price = 20;
            totalPrice = groupOfPeople * price;
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalPrice = totalPrice - totalPrice * 0.5;
            }
        } else if (dayOfWeek === "Sunday") {
            price = 22.50;
            totalPrice = price * groupOfPeople;
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalPrice = totalPrice - totalPrice * 0.5;
            }
        }
    }
    return totalPrice.toFixed(2);
}

console.log(calc(30, "Students", "Sunday"));
console.log(calc(40, "Regular", "Saturday"));