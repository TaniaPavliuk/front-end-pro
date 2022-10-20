/* eslint-disable max-classes-per-file */
const MIN_CAPACITY_REDUCTION = 0.1;
const MAX_CAPACITY_REDUCTION = 2.5;
const INITIAL_CAPACITY = 100;

function getRandomCapacity() {
  return (
    Math.random() * MAX_CAPACITY_REDUCTION +
    MIN_CAPACITY_REDUCTION
  ).toFixed(1);
}

class Car {
  constructor(
    fuelConsumption,
    engineType,
    engineVolume,
    model,
    yearOfProduction,
    weight
  ) {
    this.fuelConsumption = fuelConsumption;
    this.engineType = engineType;
    this.engineVolume = engineVolume;
    this.model = model;
    this.yearOfProduction = yearOfProduction;
    this.weight = weight;
    this.isAvailable = true;
    this.capacity = INITIAL_CAPACITY;
  }

  startDrive() {
    if (this.isAvailable === true) {
      const newCapacity = this.capacity - getRandomCapacity();
      if (newCapacity > 0) {
        this.isAvailable = false;
        this.capacity = newCapacity;
        console.log(`Let's drive ${this.model}!`);
      } else {
        console.log('Car has no capacity!');
      }
    } else {
      console.log('Car is not available!');
    }
  }

  stopDrive() {
    if (this.isAvailable === false) {
      this.isAvailable = true;
      console.log(`Stop Drive ${this.model}!`);
    }
  }
}

class Wagon extends Car {}

class Sedan extends Car {}

class Hatchback extends Car {}

function getPriceByYear(carYear, vehicleType) {
  switch (vehicleType) {
    case 'hatchback':
      if (carYear >= 2019) {
        return 1.2;
      }
      if (carYear >= 2010 && carYear <= 2018) {
        return 1.4;
      }
      if (carYear >= 2000 && carYear <= 2009) {
        return 1.7;
      }
      if (carYear >= 1990 && carYear <= 1999) {
        return 2;
      }
      break;
    case 'sedan':
      if (carYear >= 2019) {
        return 1.5;
      }
      if (carYear >= 2010 && carYear <= 2018) {
        return 1.8;
      }
      if (carYear >= 2000 && carYear <= 2009) {
        return 2;
      }
      if (carYear >= 1990 && carYear <= 1999) {
        return 2.6;
      }
      break;
    case 'wagon':
      if (carYear >= 2019) {
        return 2;
      }
      if (carYear >= 2010 && carYear <= 2018) {
        return 2.2;
      }
      if (carYear >= 2000 && carYear <= 2009) {
        return 2.5;
      }
      if (carYear >= 1990 && carYear <= 1999) {
        return 3;
      }
      break;
    default:
      console.log('invalid year!');
  }
}

function getPriceByEngineType(engineType, vehicleType) {
  switch (vehicleType) {
    case 'hatchback':
      if (engineType === 'diesel') {
        return 2.2;
      }
      if (engineType === 'petrol') {
        return 1.8;
      }
      break;
    case 'sedan':
      if (engineType === 'diesel') {
        return 2.5;
      }
      if (engineType === 'petrol') {
        return 2;
      }
      break;
    case 'wagon':
      if (engineType === 'diesel') {
        return 2.9;
      }
      if (engineType === 'petrol') {
        return 2.4;
      }
      break;
    default:
      console.log('invalid type of engine!');
  }
}

function getPriceByWeight(weight, vehicleType) {
  switch (vehicleType) {
    case 'hatchback':
      if (weight >= 800 && weight <= 1100) {
        return 1.5;
      }
      if (weight >= 1101 && weight <= 1400) {
        return 1.7;
      }
      if (weight >= 1401) {
        return 2;
      }
      break;
    case 'sedan':
      if (weight >= 800 && weight <= 1100) {
        return 1.6;
      }
      if (weight >= 1101 && weight <= 1400) {
        return 1.8;
      }
      if (weight >= 1401) {
        return 2.1;
      }
      break;
    case 'wagon':
      if (weight >= 800 && weight <= 1100) {
        return 1.7;
      }
      if (weight >= 1101 && weight <= 1400) {
        return 1.9;
      }
      if (weight >= 1401) {
        return 2.2;
      }
      break;
    default:
      console.log('invalid weight!');
  }
}

function service(vehicle) {
  let priceIndex = 0;
  let indices = 0;
  let finalPrice = 0;

  if (vehicle.yearOfProduction < 1990) {
    console.log('too old');
    return;
  }

  if (vehicle.yearOfProduction < 800) {
    console.log('too light');
    return;
  }

  if (vehicle instanceof Wagon) {
    priceIndex = 130;
    indices += getPriceByYear(vehicle.yearOfProduction, 'wagon');
    indices += getPriceByEngineType(vehicle.engineType, 'wagon');
    indices += getPriceByWeight(vehicle.weight, 'wagon');
  }
  if (vehicle instanceof Sedan) {
    priceIndex = 125;
    indices += getPriceByYear(vehicle.yearOfProduction, 'sedan');
    indices += getPriceByEngineType(vehicle.engineType, 'sedan');
    indices += getPriceByWeight(vehicle.weight, 'sedan');
  }
  if (vehicle instanceof Hatchback) {
    priceIndex = 110;
    indices += getPriceByYear(vehicle.yearOfProduction, 'hatchback');
    indices += getPriceByEngineType(vehicle.engineType, 'hatchback');
    indices += getPriceByWeight(vehicle.weight, 'hatchback');
  }

  console.log(
    `car was wrecked by: ${(INITIAL_CAPACITY - vehicle.capacity).toFixed(2)}`
  );

  finalPrice = indices * priceIndex * 0.1;
  return finalPrice;
}

const honda = new Sedan(7.7, 'petrol', 2.0, 'Honda Accord', 2014, 1500);
honda.startDrive();
honda.stopDrive();

const priceForHonda = service(honda);
console.log(priceForHonda);

// const bmw = new Car(9.0, "petrol", 3.0, "BMW 520i", 2018, 1600);
// bmw.startDrive();
// bmw.stopDrive();
// bmw.startDrive();
// bmw.startDrive();
// const audi = new Car(8.1, "diesel", 2.5, "Audi Q7", 2019, 3000);
// audi.startDrive();
// audi.stopDrive();
