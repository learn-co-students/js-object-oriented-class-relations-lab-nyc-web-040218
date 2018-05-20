const store = {
  trips: [],
  drivers: [],
  passengers: []
}

let tripId = 0;
let passengerId = 0;
let driverId = 0;

class Trip {
  constructor(driverObj, passengerObj) {
    this.id = ++tripId;
    this.passengerId = passengerObj.id;
    this.driverId = driverObj.id;

    store.trips.push(this);
  }

  driver() {
    return store.drivers.find((driverObj) => driverObj.id === this.driverId);
  }

  passenger() {
    return store.passengers.find((passengerObj) => passengerObj.id === this.passengerId);
  }
}

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter((tripObj) => tripObj.driverId === this.id);
  }

  passengers() {
    return this.trips().map((tripObj) => tripObj.passenger());
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter((tripObj) => tripObj.passengerId === this.id);
  }

  drivers() {
    return this.trips().map((passengerObj) => passengerObj.driver());
  }
}
