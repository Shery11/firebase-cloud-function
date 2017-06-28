const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 
 //this gets the value of timeDay from the database 
admin.database().ref("Game info/timeDay").once("value",function(snapShot){
	
	 var value = snapShot.val();

	 // using if condition to check the value and then change it accordingly
	 if(value == "Day 1"){
	 	// this sets the value in the database
        admin.database().ref("Game info/timeDay").set("Day 2");
        // sending response
	 	response.send("Day 1 changed to Day 2");
	 }else if(value == "Day 2"){
	 	// this sets the value in the database
	 	admin.database().ref("Game info/timeDay").set("Day 3");
	 	// sending response
	 	response.send("Day 2 changed to Day 3");
	 }else if(value == "Day 3"){
	 	// this sets the value in the database
        admin.database().ref("Game info/timeDay").set("Day 1");
	 	// sending response
	 	response.send("Day 3 changed to Day 1");
	 }else{
	 	admin.database().ref("Game info/timeDay").set("Day 1");
	 	response.send("Wrong value in database set to day 1");
	 }
	
	 
})

console.log("This is the function");

});
