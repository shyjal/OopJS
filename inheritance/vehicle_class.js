var Vehicle = function (vehicleType) {
  this.vehicleType = vehicleType;
  this.numWheels = 0;
};
Vehicle.prototype.setWheelNos=function(){ 
	switch(this.vehicleType){
		case 'car':
			this.numWheels = 4;
		break;
		case 'byke':
			this.numWheels = 2;
		break;
		default:
            this.numWheels = 0;
	}
}