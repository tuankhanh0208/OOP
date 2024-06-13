// class Person {
//     age;
//     gender;
//     name;
//     constructor(ageInput, genderInput, nameInput) {
//         this.age = ageInput;
//         this.gender = genderInput;
//         this.name = nameInput;
//     }
//     go(den) {
//         console.log(this.name +"dang di den"+den)
//     }

// } let nguoi = new Person(18, "Khanh", "Nam");
// console.log(nguoi.name);
// nguoi.go("codeGym");


// Class expression
let Student = class {
    constructor(name) {
        this.name = name
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName
    }
}
const evon = new Student("Khanh")
console.log(evon.name)

//
function company(aClass) {
    return new aClass();
}
let hello = company(class {
    sayHello() {
        console.log("Hello");
    }
});
hello.sayHello()

class Article {
    constructor(title, date) {
        this.title = title
        this.date = date
    }
    static compare(a, b) {
        return a.date - b.date;
    }
}
let articles = [
    new Article("HTML", new Date(2024, 1, 2)),
    new Article("CSS", new Date(2024, 0, 2)),
    new Article("JS", new Date(2024, 11, 2)),
]
articles.sort(Article.compare);
console.log(articles[0].title)

//static proprerties 
class Item {
    constructor(name) {
        this.name = name;
        this.constructor.count++;
    }
    static count = 0
    static getCount() {
        return Item.count;
    }
}
const pencil = new Item("Pemxi")
const laptop = new Item("Pemxi")
console.log(Item.getCount())

// Super and extends 
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walking() {
        console.log(`walking on ${this.legs} legs`)
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log("I can flying")
    }
}
let bird = new Bird(2);
console.log(bird.fly())
console.log(bird.walking())