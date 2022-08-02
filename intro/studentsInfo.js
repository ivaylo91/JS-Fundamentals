function printStudent(name, age, grade) {
    let student = {
        name: name,
        age: age,
        grade: grade
    };
    return `Name:${student.name}, Age:${student.age}, Grade:${student.grade.toFixed(2)}`
}

console.log(printStudent("John", 15, 5.54678));