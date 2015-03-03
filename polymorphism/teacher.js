Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;
function Teacher(){
    
}
Teacher.prototype.getInfo = function(){
 return "Hi! I am a Teacher";
}
  