Car.prototype = new Vehicle();	//the inheritance occurs 
Car.prototype.constructor = Car;  //Otherwise instances of Car would have a constructor of Vehicle 
function Car(vehicleType){ 
	this.vehicleType = vehicleType;
	this.hasSteering = true;
}