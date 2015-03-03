Byke.prototype = new Vehicle();
Byke.prototype.constructor = Byke;  
function Byke(vehicleType){ 
	this.vehicleType = vehicleType;
	this.hasHandle = true;
}