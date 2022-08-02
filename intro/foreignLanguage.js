function printLanguage(country) {
    if (country === "USA" || country === "USA") {
        return "English";
    } else if (country === "Spain" || country === "Argentina" || country === "Mexico") {
        return "Spanish";
    } else {
        return "unknown";
    }
}

console.log(printLanguage("Germany"));