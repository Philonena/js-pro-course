class Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }
    getFullName() {
        return `${this.name} ${this.model}`;
    }

    getAge() {
        return ((new Date()).getFullYear() - this.year);
    }

    changeColor(newColor) {
        if (newColor === this.color) {
            alert(`Авто уже покрашено в ${newColor} цвет`);
        } else {
            this.color = newColor;
            alert(`Цвет изменен на ${newColor}`);
        }
    }

    calculateWay(kilometers, fuel) {
        if (fuel < 10) {
            alert(`Осталовь всего ${fuel} л. топлива. Нужна дозаправка`);
        };
        alert(`Минимальнео время в пути ${(kilometers / this.maxSpeed).toFixed(2)} ч.`);
        if ((kilometers / 100 * this.fuelConsumption) <= fuel) {
            alert(`Дозаправка не требуется`);
        } else {
            alert(`Для совершения поездки на ${kilometers} километров необходимо еще ${((kilometers / 100 * this.fuelConsumption - fuel) / this.fuelCapacity).toFixed(2)} бака бензина`);
        }
    }
}

let firstCar = new Car('Hyundai', 'Sonata YF', 2011, 'белый', 120);

class Bmw extends Car {
    constructor(model, year, color, maxSpeed, panoramicRoof, fuelCapacity, fuelConsumption) {
        super('BMW', model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.panoramicRoof = panoramicRoof;
    }

    getDescription() {
        console.log(`Представляем Вам ${this.name} ${this.model}. Модель ${this.year} года. Цвет ${this.color}. На вопрос Есть ли в ней панорамная крыша, мы ответим ${this.panoramicRoof}. Спешите купить!`)
    }
}

class Lexus extends Car {
    constructor(model, year, color, maxSpeed, climateControl, fuelCapacity = 60, fuelConsumption = 10) {
        super('Lexus', model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.climateControl = climateControl;
    }

    changeClimateControl() {
        if (confirm(`Хотите сменить систему климат контроля?`)) {
            this.climateControl = prompt('Какой кондиционер желаете установить?');
            alert('Другой климат контроль будет установлен');
        } else {
            alert('Ну и ладно');
        }
    }
}

class Opel extends Car {
    constructor(model, year, color, maxSpeed, navigator, fuelCapacity = 60, fuelConsumption = 10) {
        super('Opel', model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.navigator = navigator;
    }

    getTankCapacityInfo() {
        console.log(`На одном баке емкостью ${this.fuelCapacity} литров вы сможете проехать ${((this.fuelCapacity / this.fuelConsumption)*100).toFixed(2)} километров, на скорости ${this.maxSpeed} км/ч это займет ${(((this.fuelCapacity / this.fuelConsumption)*100) / this.maxSpeed).toFixed(2)} ч.`)
    }
}

let firstBmw = new Bmw('5 серия E34', 1992, 'фиолетовый', 160, 'отсутствует', 70);
let firstLexus = new Lexus('RX III', 2011, 'красный', 140, 'четырехзонный', 120, 15);
let firstOpel = new Opel('Zafira C', 2013, 'черный', 130, 'спутниковый');