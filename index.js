let driverId = 0;
let passengerId = 0;
let tripId = 0;
const store = {drivers: [], passengers: [], trips: []};

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => trip.driverId === this.id);
  }

  passengers() {
    const passengerIds = this.trips().map(trip => trip.passengerId);
    return store.passengers.filter(passenger => passengerIds.includes(passenger.id));
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id);
  }

  drivers() {
    const driverIds = this.trips().map(trip => trip.driverId);
    return store.drivers.filter(driver => driverIds.includes(driver.id));
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(driver => driver.id === this.driverId);
  }

  passenger() {
    return store.passengers.find(passenger => passenger.id === this.passengerId);
  }
}
