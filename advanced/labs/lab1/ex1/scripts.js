/*
29/12/2019
Mai Mohamed Ghanem
Advanced JS lab 1 exercise ==>1
*/
function Calc(){
 var num1 ,num2;
 this.read = function(){
  num1 = prompt("please enter first number:");
  num2 = prompt("please enter second number:");
  if((parseInt(num1) !=num1) || (parseInt(num2) !=num2)){
    alert("invalid data please try again");
    this.read()
  }
};
this.add = function(){
 alert("the summetion is "  + (parseInt(num1) +parseInt(num2)))
 
}
this.mult =function(){
  alert("the multiplication is " + (parseInt(num1) * parseInt(num2)))
} 
}
var calculator = new Calc();
var readNum = calculator.read();
var addNum = calculator.add();
var addNum = calculator.mult();



