class Person {
    age;
    gender;
    name;
    constructor(ageInput, genderInput, nameInput) {
        this.age = ageInput;
        this.gender = genderInput;
        this.name = nameInput;
    }
    go(den) {
        console.log(this.name +"dang di den"+den)
    }

} let nguoi = new Person(18, "Khanh", "Nam");
console.log(nguoi.name);
nguoi.go("codeGym");