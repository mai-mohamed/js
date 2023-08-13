// form  = document.getElementById("form");
// status = document.getElementById("status");
// reset = document.getElementById("reset");
// idSelect = document.getElementById("idSelect")
// var xhr = new  XMLHttpRequest();
// xhr.open('GET' ,'https://jsonplaceholder.typicode.com/todos');
// xhr.send()
// xhr.onload = function(){
//     if (xhr.status != 200) {
//         console.log(xhr.response)
//     } else {
//      //my to do list as html
//      //console.log(xhr.response);
//      console.log(JSON.parse(xhr.response))
//      var myData=[];
//       myData = JSON.parse(xhr.response);
//      for(var i = 0 ; i<myData.length ; i++){
//       //console.log( myData[i].id + " " + myData[i].completed);
//       var myHeaders = document.createElement("h4");
//       document.body.appendChild(myHeaders);
//       var options = document.createElement("option");
//       idSelect.appendChild(options);
//       options.className = "id_options";
//       options.value=i;
//       options.innerText=i + 1;
//       myHeaders.innerHTML ="user id =" + myData[i].id + " " + "status is : " + myData[i].completed;
//       if(myData[i].completed ==false){
//        myHeaders.className=("false");
//       }
//       else{
//        myHeaders.className=("true");
//       }
//       if(myHeaders.className==("false")){
//        myHeaders.style.backgroundColor = "green"
//       }
//       else{
//        myHeaders.style.backgroundColor = "yellow"
//       }
//         // for(var i=0 ; i<(document.getElementsByClassName("false")).length ; i++){
//         //     (document.getElementsByClassName("false"))[i].classList.add("all" ,"false") 
//         // }
//      }

//     }
// }
// var completeClass =(document.getElementsByClassName("true"));
// var progressClass =(document.getElementsByClassName("false"));
// function showComplete(){
//  for(var i = 0 ; i<completeClass.length ; i++){
//  if(form.status.value == "completed"){
//   ((document.getElementsByClassName("true"))[i]).style.display = "block";
//   ((document.getElementsByClassName("false"))[i]).style.display = "none";
//   }
//   else{
//    ((document.getElementsByClassName("true"))[i]).style.display = "none";
//   ((document.getElementsByClassName("false"))[i]).style.display = "block";
//   }
//  }
// }
// function resetData(){
//  for(var i = 0 ; i<completeClass.length ; i++){
//   ((document.getElementsByClassName("true"))[i]).style.display = "block";
//   ((document.getElementsByClassName("false"))[i]).style.display = "block";
//  }
// }
// var idClasses =(document.getElementsByClassName("id_options"));
// function showId(){
//     var Arr=[];
//     for(var i = 0 ; i<(completeClass.length + progressClass.length); i++){
//        var strTrue = ((document.getElementsByClassName("true"))[i]).innerHTML; 
//        var matches = strTrue.match(/(\d+)/); 
//         if (matches) { 
//          trueNum = matches[0]; 
//          Arr.push(trueNum)
//         } 
//         var strFalse = ((document.getElementsByClassName("false"))[i]).innerHTML; 
//         var matches = strFalse.match(/(\d+)/); 
//         if (matches) { 
//          falseNum =matches[0]; 
//          Arr.push(falseNum )
//         } 

//     }
//     console.log(Arr)
//   for(var i = 0 ; i<(completeClass.length + progressClass.length); i++){

//         if(Arr===(document.getElementsByClassName("id_options"))[i]){
//             ((document.getElementsByClassName("true"))[i]).style.display = "block";
//              ((document.getElementsByClassName("false"))[i]).style.display = "block";
//           }
//           else{
//             ((document.getElementsByClassName("true"))[i]).style.display = "none";
//             ((document.getElementsByClassName("false"))[i]).style.display = "none";
//           }


//      }


//  }

//  form.status.addEventListener("click" ,showComplete);
//  form.userId.addEventListener("click" , showId);
//  reset.addEventListener("click" ,resetData);
//////////////////////////////////////////////////////////////////
form = document.getElementById("form");
status = document.getElementById("status");
reset = document.getElementById("reset");
idSelect = document.getElementById("idSelect")
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
xhr.send()
xhr.onload = function () {
  if (xhr.status != 200) {
    console.log(xhr.response)
  } else {
    //my to do list as html
    //console.log(xhr.response);
    console.log(JSON.parse(xhr.response))
    var myData = [];
    myData = JSON.parse(xhr.response);
    for (var i = 0; i < myData.length; i++) {
      //console.log( myData[i].id + " " + myData[i].completed);
      var myHeaders = document.createElement("h4");
      document.body.appendChild(myHeaders);
      var options = document.createElement("option");
      idSelect.appendChild(options);
      options.className = "id_options";
      options.value = i;
      options.innerText = i + 1;
      myHeaders.innerHTML = "user id =" + myData[i].id + " " + "status is : " + myData[i].completed;
      if (myData[i].completed == false) {
        myHeaders.className = ("false");
      } else {
        myHeaders.className = ("true");
      }
      if (myHeaders.className == ("false")) {
        myHeaders.style.backgroundColor = "green"
      } else {
        myHeaders.style.backgroundColor = "yellow"
      }
    }

  }
}
var completeClass = (document.getElementsByClassName("true"));
var progressClass = (document.getElementsByClassName("false"));

function showComplete() {
  for (var i = 0; i < completeClass.length; i++) {
    if (form.status.value == "completed") {
      ((document.getElementsByClassName("true"))[i]).style.display = "block";
      ((document.getElementsByClassName("false"))[i]).style.display = "none";
    } else {
      ((document.getElementsByClassName("true"))[i]).style.display = "none";
      ((document.getElementsByClassName("false"))[i]).style.display = "block";
    }
  }
}

function resetData() {
  for (var i = 0; i < completeClass.length; i++) {
    ((document.getElementsByClassName("true"))[i]).style.display = "block";
    ((document.getElementsByClassName("false"))[i]).style.display = "block";
  }
}
var idClasses = (document.getElementsByClassName("id_options"));

function showId() {
  var Arr = [];
  for (var i = 0; i < (completeClass.length + progressClass.length); i++) {
    var strTrue = ((document.getElementsByClassName("true"))[i]).innerHTML;
    var regexTrue = /(\d+)/;
    if (regexTrue.test(strTrue) == true) {
      Arr.push(strTrue)
    }

    var strFalse = ((document.getElementsByClassName("false"))[i]).innerHTML;
    var regexFalse = /(\d+)/;
    if (regexFalse.test(strFalse) == true) {
      Arr.push(strFalse)
    }
  }
  console.log(Arr)
  for (var i = 0; i < (completeClass.length + progressClass.length); i++) {
    if (Arr === (document.getElementsByClassName("id_options"))[i]) {
      ((document.getElementsByClassName("true"))[i]).style.display = "block";
      ((document.getElementsByClassName("false"))[i]).style.display = "block";
    } else {
      ((document.getElementsByClassName("true"))[i]).style.display = "none";
      ((document.getElementsByClassName("false"))[i]).style.display = "none";
    }

  }

}

form.status.addEventListener("click", showComplete);
form.userId.addEventListener("click", showId);
reset.addEventListener("click", resetData);