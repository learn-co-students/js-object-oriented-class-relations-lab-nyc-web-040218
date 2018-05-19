store = {
    drivers: [],
    passengers: [],
    trips: []
};

let driverID = 0;
let passengerID = 0;
let tripID = 0;

class Driver {
    constructor(name){
        this.id = driverID;
        this.name = name;
        store.drivers.push(this)
        driverID++;
    }

    trips(){
        return store.trips.filter(trip => trip.driverId === this.id)
    }

    passengers(){
        return this.trips().map(trip => trip.passenger());
    }
}

class Passenger {
    constructor(name){
        this.id = passengerID;
        this.name = name;
        store.passengers.push(this)
        passengerID++;
    }

    trips(){
        return store.trips.filter(trip => trip.passengerId === this.id)
    }

    drivers(){
        return this.trips().map(trip => trip.driver());
    }
}

class Trip {
    constructor(driver, passenger){
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        this.id = tripID;
        store.trips.push(this)
        tripID++
    }
    
    driver(){
        return store.drivers.find(driver => driver.id === this.driverId);
    }

    passenger(){
        return store.passengers.find(passenger => passenger.id === this.passengerId);
    }
}
