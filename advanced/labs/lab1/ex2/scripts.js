// /*
// 29/12/2019
// Mai Mohamed Ghanem
// Advanced JS lab 1 exercise ==>2
// */
// function StopWatch(){
//   var duration = 0;
//   this.interval;
//   this.count = function(){
//      duration++
//      console.log(duration)
//   };
//   this.start = function(){
//     this.interval = setInterval(this.count,1000);
//   };
//   this.stop = function(){
//     clearInterval(this.interval);
//   };
//   this.reset = function(){
//     clearInterval(this.interval);
//     duration = 0;
//     console.log(duration)
//   }
// }
// var myStopWatch = new StopWatch();
// //  myStopWatch.start();
// //  myStopWatch.stop();
//  myStopWatch.reset();


///////////////////lab2
///////////////////////ex1
// function AllUsers(){
//   var adminEmail;
// var userArr , guestArr , adminArr = [];
// function roleEntry (){
//   return prompt ("please enter user role");
// }

// function userData(){
//    user.name = prompt("please enter user name");
//    user.gender = prompt("please enter user gender") ; 
//    user.phone =prompt("please enter user phone")
// }

// var user = {
//   name: "",
//   gender : "" ,
//   phone : ""
// };

// if( roleEntry() == "admin"){
//   var admin = {
//     email :"sss" ,
//     role : "admin"
// };

// userData();
// admin.__proto__ = user;
//  console.log(user);
//  console.log(userArr);

//  userArr.push(user);
//  adminArr.push(admin);

//  console.log(userArr);
//  console.log(adminArr);
// }
// else{
//   var guest = {
//     role : "guest"
//   };

//   guest.__proto__ = user;
//   userData()
//   guestArr.push(guest)
//   console.log(guestArr)
// }

// }

// var all = new AllUsers()


//////////////////////////////////////////
//test constructor lab
function AllUsers(){
  var userArr = [];
    this.user = {
       userName : "" ,
       userGender : "" , 
       userPhone : "" 
    }
     
     do{
      this.role = prompt("please enter user role");
      do{
        if((this.role !="admin") && (this.role !="guest")){
          alert("invalid entered role please try again")
          this.role = prompt("please enter user role");
        }
      }
      while((this.role !="admin") && (this.role !="guest"))
      this.user.userName = prompt("please enter user name");
      this.user.userGender = prompt("please enter user gender");
      this.user.userPhone = prompt("please enter user phone");
        
      for(var i = 0 ; i<userArr.length ; i++){
        if( this.user.userPhone == userArr[i].userPhone){
          alert("this phone number is already exist")
        }
        else{
          userArr.push(this.user);
        }
      }
    
      userArr.push(this.user);
        console.log(userArr);
      var check =confirm("do you want to add an other user")
     }
     while(check ==true)
    
    if(this.role =="admin"){
      this.admin = {
        adminRole : "admin" ,
        adminEmail : ""
      }
      this.admin.__proto__ = this.user;
      this.admin.adminEmail = prompt("please enter admin email")
      console.log(this.admin)
    }
    else {
      this.guest = {
        guestRole : "guest" 
      }
      this.guest.__proto__ = this.user;
    }
    
    
}
var all = new AllUsers();
