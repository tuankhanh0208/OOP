class Temperature {
    celsius;
    constructor(celsiusInput) {
        this.celsius = celsiusInput;
    }
    fahrenheit() {
        return 9 / 5 * this.celsius + 32;
    }

    kelvins() {
        return this.celsius + 273.15
    }
    display() {
        return `Nhiệt độ  chuyển qua độ F bằng ${this.fahrenheit} và chuyển qua độ K bằng ${this.kelvins}`
    }
}
let temperature = new Temperature(25);