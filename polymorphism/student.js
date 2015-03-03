Student.prototype = new Person();
Student.prototype.constructor = Student;
function Student(){
    this.mark = 74;
}
Student.prototype.getInfo = function(){
 return "Hi! I am a Student, and my mark is "+this.mark;
}
  