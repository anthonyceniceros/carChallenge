
//declaring the class, blueprint for making vehicle objects 
class Vehicle {
    //setting properties on new object 
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
//method added to vehicle class, 
  honk() {
    return "Beep.";
  }
//another method added to vClass returing make, model, year 
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}
//creating instance of vehicle class 
let myFirstVehicle = new Vehicle("Toyota", "Camry Hybrid XLE", 2012);
console.log(myFirstVehicle.honk()); 
console.log(myFirstVehicle.toString()); 

//defining car class, inherits from vClass, has same properties/methods, super() calls on inherited constructor 
class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 4;
    }
  }
  
//creating an instance of vClass, calling  all our previous methods
  let myFirstCar = new Car("Ford", "Explorer", 2002);
  console.log(myFirstCar.toString()); 
  console.log(myFirstCar.honk());     
  console.log(myFirstCar.numWheels);  

  //defining MOTO class that also extends to vClass
  class Motorcycle extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 2;
    }
  //method specifically for MOTO objects
    revEngine() {
      return "VROOM!!!";
    }
  }


  //first instance of MOTO class, calling all previous methods 
  let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
  console.log(myFirstMotorcycle.toString()); 
  console.log(myFirstMotorcycle.honk());     
  console.log(myFirstMotorcycle.revEngine()); 
  console.log(myFirstMotorcycle.numWheels);  


  //defining Garage class with two properties that hold an array of vehicles, and the maxNum 
  class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    //new method that adds vehicles to the garage, if unable -- gives error messages
    add(vehicle) {
        //if input is NOT `Vehicle`, `Car, or `Motorcycle` function gives error message 
      if (!(vehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
  
      this.vehicles.push(vehicle);
      return "Vehicle added!";
    }
  }
  
  let garage = new Garage(2);
  console.log(garage.add(new Car("Hyundai", "Elantra", 2015))); // "Vehicle added!"
  console.log(garage.add("Taco")); // "Only vehicles are allowed in here!"
  console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000))); // "Vehicle added!"
  console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001))); // "Sorry, we're full."
  