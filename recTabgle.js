class Rectangle {
    height;
    weight;
    constructor(heightInput, weightInput) {
        this.height = heightInput;
        this.weight = weightInput;
    }
    perimetor() {
        return 2 * (this.height * this.weight);
    }
    area() {
        return (this.height * this.weight);
    }
    display() {
        console.log(`Rectangle: Length = ${this.height}, Width = ${this.weight}, Area = ${this.area()}, Perimeter = ${this.perimetor()}`);
    }
}
let HCN = new Rectangle(3, 4);
HCN.area();
HCN.display();