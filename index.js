let dId = 0;
let pId = 0;
let tId = 0;
let store = {drivers: [], passengers: [], trips: []};

class Driver {
    constructor(name){
        this.id = ++dId;
        this.name = name;
        store.drivers.push(this);
    }

    trips(){
        return store.trips.filter(trip => {
            return trip.driverId === this.id;
        })
    }
    passengers(){
        return this.trips().map(trip =>{
            return trip.passenger();
        });
    }
}

class Passenger {
    constructor(name){
        this.id = ++pId;
        this.name = name;
        store.passengers.push(this);
    }

    trips(){
        return store.trips.filter(trip =>{
            return trip.passengerId === this.id;
        });
    }

    drivers(){
        return this.trips().map(trip =>{
            return trip.driver();
        })
    }
}

class Trip {
    constructor(driver, passenger){
        this.id =  ++tId;
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        store.trips.push(this);
    }

    driver(){
        return store.drivers.find(function(driver){
            return driver.id === this.driverId;
        }.bind(this))
    }

    passenger(){
        return store.passengers.find(function(passenger){
            return passenger.id === this.passengerId;
        }.bind(this))
    }
}