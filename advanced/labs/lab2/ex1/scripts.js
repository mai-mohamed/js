
var userArr = [];
//role function
function userRole() {
	return prompt("please enter the role")
}
//validate function
function validate() {
	return alert("invalid entered data !!")
}
//confirm function
function confirmData() {
	return confirm("add an other user?")
}
//user constructor
function AllUsers(username, usergender, userphone) {
	 this.userName = username,
		this.gender = usergender,
		this.phone = userphone
}
//guest constructor
function AllGuests() {
	this.role = "guest"
}
//admin constructor
function AllAdmin(adminemail) {
	 this.role = "admin",
		this.email = adminemail
}
//conditions and adding users
do {
	var roleType = userRole();
	if (roleType === "admin" || roleType === "guest") {
		var users = new AllUsers(prompt("please enter user name"),
			prompt("please enter user gender"), prompt("please enter user phone"));
			// if (userArr.length >0 )
		for (var i = 0; i < userArr.length; i++) {
			if (users.phone === userArr[i]) {
				alert("this user phone is already exist");
			}
		}
	}
	if (roleType == "admin") {
		var admins = new AllAdmin(prompt("please enter admin email"));
		admins.__proto__ = users;
		userArr.push(admins.phone)
	} else if (roleType == "guest") {
		var guests = new AllGuests();
		guests.__proto__ = users;
		userArr.push(guests.phone);
	} else {
		validate();
	}
	var addAgain = confirmData();
}
while (addAgain == true)
console.log(userArr)

