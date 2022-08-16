function printMultiplicationTable(number) {
    let product;
    for (let i = 1; i <= 10; i++) {
        product = number * i;
        console.log(`${number} x ${i} = ${product}`);
    }
}

printMultiplicationTable(5);