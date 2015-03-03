var Vehicle = function(){
  // These are private
  var vehicleType;
  var numWheels;
  return {
          color:'White',
          init: function (type, wheels) {  
            vehicleType = type;
            numWheels = wheels;
          },
          print: function() {
            return "Hello, I'm a " + vehicleType + ". " +
                   "I have " + numWheels + " wheels.";
          }
        };
};