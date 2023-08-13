/*
29/12/2019
Mai Mohamed Ghanem
Advanced JS lab 1 exercise ==>3
*/
var personName , personAge ,sub ;
 //data entery
 function personDeclaration(){
  personName = prompt("please enter person name");
  personAge = prompt("please enter person age");
  sub =  prompt("please enter teacher subject");
 }
 personDeclaration();
 //validation
 if((parseInt(personAge) != personAge )|| (personName !=isNaN) || (sub !=isNaN)){
  alert("invalid data please enter again");
  personDeclaration();
 }
 //inheretance
var person = {
  name: personName,
  age : personAge
};
var teacher = {
  teach: function(subject){
     alert("teacher " + person.name + " is now teaching " + subject + " and his/her age is " + person.age) ;
  }
};
teacher.__proto__ = person;
teacher.teach(sub)