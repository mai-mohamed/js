
/////////////////////////////////////////////////
form = document.getElementById("form")
var regexName = /\D/;
var regexPassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})[a-z0-9A-z]/;
var regexEmail = /^[a-z]+\w+\@[a-z]+\.[a-z]{2,}$/i;

function formSubmit(e){
 e.preventDefault();
 if(regexName.test(form.user.value) == true){
   console.log(true)
 }
 else{
  console.log("invalid user name")
 }

 //password
 if(regexPassword.test(form.password.value) == true){
   console.log("true password")
 }
 else{
  console.log("false password")
 }
///////
function confirmPassword(e){
 e.preventDefault();
 if(form.userName.value.length<3){
  form.userName.nextElementSibling.innerText="name must be more than three letters";
  form.userName.nextElementSibling.style.color = "red"
 }
 else{
  form.userName.nextElementSibling.innerText = "valid Data";
  form.userName.nextElementSibling.style.color = "green"
 }
}
 //email
 if(regexEmail.test(form.email.value) == true){
  console.log("true email")
}
else{
 console.log("false email")
}
}
form.addEventListener("submit" ,formSubmit)
form.password.addEventListener("keyup" ,confirmPassword)