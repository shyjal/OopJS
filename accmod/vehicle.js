var Vehicle = function () {
  this.vehicleName = 'Renault Scala';	// Public
  var _color = 'White';	// Private

  this.getColor = function(){
    return _color;
  };
  this.setColor = function(color){
    _color = color;
  };

  var _variant = "";
  //public getter/setter for static variable
  Vehicle.prototype.setVariant = function( variant ) {
	 _variant = variant;
  }
  Vehicle.prototype.getVariant= function() {
	return _variant;
  }
};

