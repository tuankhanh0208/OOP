class Student {
    name;
    age;
    scores;
    constructor(nameInput, ageInput, scoresInput) {
        this.name = nameInput;
        this.age = ageInput;
        this.scores = scoresInput;
    }
    updateStudent(nameInput, ageInput, scoresInput) {
        this.name = nameInput;
        this.age = ageInput;
        this.scores = scoresInput;
    }
    display() {
        console.log(`Name:${this.name}`)
        console.log(`Age: ${this.age}`)
        console.log(`Scores: ${this.scores}`);
    }
    calculateAVG() {
        let count = 0;
        for (let i = 0; i < this.scores.length; i++) {
            count += this.scores[i];
        }
        let average = count / this.scores.length;
        return (average);
    }
}
let sv1 = new Student("Alice", 20, [90, 85, 88])
let sv2 = new Student("Bob", 21, [78, 82, 84])
sv1.display()
sv2.display()
const avgSt1 = sv1.calculateAVG()
const avgSt2 = sv2.calculateAVG()
// console.log(avgSt1)
// sv1.updateStudent("Alice Johnson", 21, [95, 87, 92]);
// sv1.display()
if (avgSt1 > avgSt2) {
    console.log("Điểm của sinh viên 1 cao hơn");
} else if (avgSt1 < avgSt2) {
    console.log("Điểm của sinh viên 2 cao hơn");
} else {
    console.log("Điểm của 2 sinh viên bằng nhau");
}