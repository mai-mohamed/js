// Objects are mutable
// var obj = {
//     name: 'Ali'
// }
// var x = obj;
// x.name = 'Ahmed';
// console.log(x)
// console.log(obj)


/** Factory function */
// function createUser (fName , lName , age ) {
//     return {
//         fName: fName,
//         lName: lName,
//         age: age,
//         getFullName: getFullName(fName ,lName)

//     }
// }

// function  getFullName( fName ,lName) {
//     return {
//          fullName: fName + ' ' + lName
//      }
// }
// var fullName = getFullName('Asmaa' , 'mohamed')
// console.log(fullName)

// var user = createUser('ali' , 'Ahmed' , 25);
// // user.name = 'ahmed';
// // var user2 = createUser('asmaa' , 20);
// console.log(user);
// console.log(user2);


// Constructor function
// function User() {
//     var x = 5;
//     // console.log(this)
//     this.name = 'Ali',
//     this.age = 25
//     // return { track: 'FE'}
//     // return x
// }

// var user = new User();
// var user2 = new User();
// user.track ='FE';
// console.log(user)
// console.log(user2)
// console.log(this.user) 
// // this.user  == var user




/**  Definproperty method */
// var obj = {
// };

// Object.defineProperty(obj , 'name' , {value: 'Ahmed'} );
// console.log(obj);

// var desc = Object.getOwnPropertyDescriptor(obj , 'name');
// obj.name = 'Ali';
// console.log(obj)
// console.log(desc);

// var obj2 = { age: 25 , name: 'ahmeds'}
// desc2.configurable = false;
// Object.defineProperty(obj2 , 'age' , {
//     value: 25,
//     writable: false,
//     enumerable: false
// })
// console.log(desc2);
// var desc2 = Object.getOwnPropertyDescriptor(obj2 , 'age');
// obj2.age = 20;
// console.log(desc2);
// console.log(obj2)

// for (var key in obj2) {
//    console.log(key)
//    Object.defineProperty(obj2 , key , {})
// }


//  writable , enumrable , configrables flags
// var obj = {
//     name: 'Ahmed'
// }
// Object.defineProperty(obj , 'age' , {value: 25 , writable: false});
// obj.age = 20;
// console.log(obj)

/* Private properties  */
// 1 - using writable : false
// 2- using var inside function

// function User () {
//     this.name = 'Ahmed'
//     this.age= 25
//     var basicSlary = 1000;
//     this.bounce = 200
//     this.getSalary = function() {
//         return basicSlary + this.bounce
//     }

// }

// var user  = new User()
// console.log(basicSlary)
// user.basicSlary = false;
// console.log(user.getSalary())

// 3 - setter / getters
// function Circle () {
//     var x = 5;
//     Object.defineProperty(
//         this ,
//         'defaultX'  , {
//             get: function () {
//                 return x
//             } ,
//             set: function(value) {
//                 if(!value) {
//                     throw new Error("Invalid value")
//                 } else {
//                     x = value
//                 }
//             }
//             }
//        )
// }

// var circle = new Circle();
// console.log(circle.defaultX)
// circle.defaultX = false;
// console.log(circle.defaultX)

/* [[Prototype]] - using __prototype__ */
// var animal = {
//     eats: true
// }

// var rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal; // setter
// // console.log(rabbit)
// // console.log(rabbit.eats)
// // console.log(rabbit.__proto__) // getter

// for (var key in rabbit) {
//     if(rabbit.hasOwnProperty(key)) {
//         console.log(key)
//     }
// }


/* [[Prototype]] - using  */
// var animal = {
//     eats: true,
//     drink: false
// }
// var rabbit  = Object.create(animal);
// // var proto = Object.getPrototypeOf(rabbit)
// Object.setPrototypeOf(rabbit ,animal)
// Object.setPrototypeOf(animal ,rabbit)
// console.log(rabbit)
// console.log(animal)
///////////////////////////////////////////////////////////
/////////////lab

///////ex1
// //calculator
// function Calc(){
//  var num1 ,num2 ;
//  this.read_1 = function(){
//      num1 =prompt("please enter first number");
//      if(parseInt(num1) !=num1){
//       alert("invalid number");
//      }
//      else{
//       return num1
//      }
     
//  },

//  this.read_2 = function(){
//   num2 =prompt("please enter second number");
//   if(parseInt(num2) !=num2){
//    alert("invalid number");
//   }
//   else{
//    return num2
//   }
// },

//  this.sum = function sum(){
//   console.log(parseInt(num1)+ parseInt(num2))
//   if((num1+ num2) !=isNaN){
//    alert("invalid data please enter again")
//    this.read_1();
//    this.read_2();
//   }
//  },

//  this.mult = function mult(){
//   console.log(parseInt(num1) * parseInt(num2))
//  }
// }

// var calc = new Calc();

// var read1 =calc.read_1();
// var read2 =calc.read_2();
// var sumNum =calc.sum();
// var multNum =calc.mult();


////////////////////////////////
//try
//factory function
//trying to make a factory function for entering 2 numbers from user and return an object contain 2 numbaers
// var calc = function(){
//   var num1 = prompt("please enter number1");
//   var num2 = prompt("please enter number2");
//   return{
//     number1 :num1 ,
//     number2 :num2
//   }
// }
// var x=calc();
// console.log(x)

//constructor
// function User(){
//   this.name="ahmed" ;
//   this.age = 20;
// }

// var newUser =new User();
// console.log(newUser)

//factory function constructor function'
//factory function is a function is used to return an object
// var factory = function(){
//   var x = 5 ;
//   var  y=10;
//   return{
//     name : x,
//     age : y
//   }
// }
// var z= factory();
// console.log(z)
//constructor function
//it is a function doesn't need return
// function  Construct(){
// this.fullName = "mai"
// this.age = 25
// }

// var constructors = new Construct();
// console.log(constructors)

//try ex1 with object
//read is a factory function that return an object of two numbers

// function Calc(){
//  var num1 ,num2;
//  this.read = function(){
//   num1 = prompt("please enter first number:");
//   num2 = prompt("please enter second number:")
//   return{
//     number1 : num1,
//     number2 : num2
//   }
// };
// this.add = function(){
//   var sum = parseInt(this.read.number1) + parseInt(this.read.number2) ;
//   return sum;
// }
// // this.mult = ;
// }
// var calculator = new Calc();
// var readNum = calculator.read();
// var addNum = calculator.add();
// console.log(addNum)

//ex2
function StopWatch(){
  var duration = 0;
  this.interval;
  this.count = function(){
     duration++
     console.log(duration)
  };
  this.start = function(){
    this.interval = setInterval(this.count,1000);
  };
  this.stop = function(){
    clearInterval(this.interval);
  };
  this.reset = function(){
    clearInterval(this.interval);
    duration = 0;
    console.log(duration)
  }
}
var myStopWatch = new StopWatch();
//  myStopWatch.start();
//  myStopWatch.stop();
 myStopWatch.reset();


 //ex3
 var personName , personAge ,sub ;
 
 function personDeclaration(){
  personName = prompt("please enter person name");
  personAge = prompt("please enter person age");
  sub =  prompt("please enter teacher subject");
 }
 personDeclaration();
 if((parseInt(personAge) != personAge)){
  alert("invalid data please enter again");
  personDeclaration();
 }
var person = {
  name: personName,
  age : personAge
};
var teacher = {
  teach: function(subject){
     console.log("teacher " + person.name + " is now teaching " + subject + " and his/her age is " + person.age) ;
  }
};
teacher.__proto__ = person;
teacher.teach(sub)