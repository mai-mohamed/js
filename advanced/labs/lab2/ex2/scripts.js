
 function getSeconds(num){
  return setTimeout(function(){
   alert("your time which is " + num + " seconds is out");
   },num*1000)
 }
do{
 var userNum =prompt("please enter number of seconds");
}
while(parseInt(userNum) !=userNum)
 getSeconds(userNum)

