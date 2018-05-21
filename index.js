let store = {drivers: [], passengers:[], trips:[]}

driverid = 0

class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverid
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(trip =>{
      return trip.driverId === this.id
    })
  }
  passengers(){
    return this.trips().map(trip => {
      return trip.passenger()})
    }

}

passengerid = 0

class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passengerid
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(trip =>{
      return trip.passengerId === this.id
    })
  }

  drivers(){
    return this.trips().map(trip => {
      return trip.driver()})
    }

}

tripid = 0

class Trip{
  constructor(driver, passenger){
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripid
    store.trips.push(this)
  }

  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }

  driver(){
    return store.drivers.find(driver =>{
      return driver.id === this.driverId;
    })
  }

}
