// // Пример использования классов Vehicle, Car и Truck
// const myCar = new Car('Toyota', 'Corolla', 2015, 50000, 4);
// console.log(myCar.info()); // "2015 Toyota Corolla with 50000 miles and 4 doors"
// myCar.drive(150);
// console.log(myCar.info()); // "2015 Toyota Corolla with 50150 miles and 4 doors"
// myCar.service();
// myCar.openTrunk();
//
// const myTruck = new Truck('Ford', 'F-150', 2018, 30000, 1000);
// console.log(myTruck.info()); // "2018 Ford F-150 with 30000 miles and 1000 kg cargo capacity"
// myTruck.drive(200);
// console.log(myTruck.info()); // "2018 Ford F-150 with 30200 miles and 1000 kg cargo capacity"
// myTruck.loadCargo(800);
// myTruck.loadCargo(1200);
//
// // Отображение информации о транспортных средствах на странице
// document.getElementById('vehicle-info').innerText = `Car: ${myCar.info()}\nTruck: ${myTruck.info()}`;


// Базовый класс Vehicle
// class Vehicle {
//     constructor(make, model, year, mileage) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.mileage = mileage;
//     }
//
//     // Метод для увеличения пробега
//     drive(distance) {
//         this.mileage += distance;
//     }
//
//     // Метод для получения информации о транспортном средстве
//     info() {
//         return `${this.year} ${this.make} ${this.model} with ${this.mileage} miles`;
//     }
// }
//
// // Класс Car, расширяющий Vehicle
// class Car extends Vehicle {
//     constructor(make, model, year, mileage, numDoors) {
//         super(make, model, year, mileage);
//         this.numDoors = numDoors;
//     }
//
//     // Переопределение метода info
//     info() {
//         return `${super.info()} and ${this.numDoors} doors`;
//     }
// }
//
// // Класс Truck, расширяющий Vehicle
// class Truck extends Vehicle {
//     constructor(make, model, year, mileage, cargoCapacity) {
//         super(make, model, year, mileage);
//         this.cargoCapacity = cargoCapacity;
//     }
//
//     // Переопределение метода info
//     info() {
//         return `${super.info()} and ${this.cargoCapacity} kg cargo capacity`;
//     }
// }
//
// // Пример использования
// const myCar = new Car('Toyota', 'Corolla', 2015, 50000, 4);
// console.log(myCar.info()); // "2015 Toyota Corolla with 50000 miles and 4 doors"
// myCar.drive(150);
// console.log(myCar.info()); // "2015 Toyota Corolla with 50150 miles and 4 doors"
//
// const myTruck = new Truck('Ford', 'F-150', 2018, 30000, 1000);
// console.log(myTruck.info()); // "2018 Ford F-150 with 30000 miles and 1000 kg cargo capacity"
// myTruck.drive(200);
// console.log(myTruck.info()); // "2018 Ford F-150 with 30200 miles and 1000 kg cargo capacity"


// Базовый класс Vehicle
class Vehicle {
    constructor(make, model, year, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    // Метод для увеличения пробега
    drive(distance) {
        this.mileage += distance;
    }

    // Метод для получения информации о транспортном средстве
    info() {
        return `${this.year} ${this.make} ${this.model} with ${this.mileage} miles`;
    }

    // Метод для обслуживания транспортного средства
    service() {
        this.mileage = 0;
        console.log(`${this.year} ${this.make} ${this.model} has been serviced. Mileage reset to 0.`);
    }
}

// Класс Car, расширяющий Vehicle
class Car extends Vehicle {
    constructor(make, model, year, mileage, numDoors) {
        super(make, model, year, mileage);
        this.numDoors = numDoors;
    }

    // Переопределение метода info
    info() {
        return `${super.info()} and ${this.numDoors} doors`;
    }

    // Метод для открытия багажника
    openTrunk() {
        console.log("The trunk is now open.");
    }
}

// Класс Truck, расширяющий Vehicle
class Truck extends Vehicle {
    constructor(make, model, year, mileage, cargoCapacity) {
        super(make, model, year, mileage);
        this.cargoCapacity = cargoCapacity;
    }

    // Переопределение метода info
    info() {
        return `${super.info()} and ${this.cargoCapacity} kg cargo capacity`;
    }

    // Метод для загрузки груза
    loadCargo(weight) {
        if (weight <= this.cargoCapacity) {
            console.log(`Cargo of ${weight} kg has been loaded.`);
        } else {
            console.log(`Cannot load ${weight} kg. Exceeds cargo capacity of ${this.cargoCapacity} kg.`);
        }
    }
}

// Пример использования
const myCar = new Car('Toyota', 'Corolla', 2015, 50000, 4);
console.log(myCar.info()); // "2015 Toyota Corolla with 50000 miles and 4 doors"
myCar.drive(150);
console.log(myCar.info()); // "2015 Toyota Corolla with 50150 miles and 4 doors"
myCar.service();
myCar.openTrunk();

const myTruck = new Truck('Ford', 'F-150', 2018, 30000, 1000);
console.log(myTruck.info()); // "2018 Ford F-150 with 30000 miles and 1000 kg cargo capacity"
myTruck.drive(200);
console.log(myTruck.info()); // "2018 Ford F-150 with 30200 miles and 1000 kg cargo capacity"
myTruck.loadCargo(800);
myTruck.loadCargo(1200);
