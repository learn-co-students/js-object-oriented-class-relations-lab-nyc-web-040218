let store = {drivers: [], passengers: [], trips: []}

let driveId = 0
class Driver{

  constructor(name){
    this.id = ++driveId
    this.name = name
    store.drivers.push(this)
  }
  trips(){return store.trips.filter(trip =>
    trip.driverId === this.id)}
  passengers(){return this.trips().map(trip => {return trip.passenger()})}
}

let passId = 0
class Passenger{

  constructor(name){
    this.id = ++passId
    this.name = name
    store.passengers.push(this)
  }
  trips(){return store.trips.filter(trip =>
    trip.passengerId === this.id)}

  drivers(){return this.trips().map(trip => {return trip.driver()})}
}

let tripId = 0
class Trip{

  constructor(driver, passenger){
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }
  passenger() {return store.passengers.find(pass =>
    pass.id === this.passengerId)}

  driver() {return store.drivers.find(driver =>
    driver.id === this.driverId)}

}
