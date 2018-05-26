//The following is Firebase's authentication/linking process. I have a personalized Firebase API key
//I do not have my apiKey below because that is sensitive information
var config = {
  apiKey: "",
  authDomain: "user-data-bf0aa.firebasea  pp.com",
  databaseURL: "https://user-data-bf0aa.firebaseio.com",
  projectId: "user-data-bf0aa",
  storageBucket: "user-data-bf0aa.appspot.com",
  messagingSenderId: "190731926113"
};

//firebase initialization
firebase.initializeApp(config);
var database = firebase.database();


//firebase sign up
var email = "";
var password ="";

function signup(){
var email = String(document.getElementById("email").value);
var password = String(document.getElementById("psw").value);

//This is the function for signing up in Firebase. The .catch part is for error analysis. It catches the information in the case of an error.
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}

//firebase log in
var email1 = "";
var password1 = "";

function login(){
  var email = String(document.getElementById("user").value);
  var password = String(document.getElementById("pass").value);

//again, the catching of errors
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // errors are handled here:
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
  // ...

//.currentUser grabs the information of the current user and stores it in the variable "user"
  var user = firebase.auth().currentUser;

//The following checks if the variable "user" is null. If not, it displays the user's information in the console
if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}
;

}

//----User profile
var user = firebase.auth().currentUser;
var uemail

function profile(){

  if (user != null) {
    uemail = user.email;
    ref.push(uemail);

  }
}

var name
var wemail
var subject
var city
var degree

//The function for entering a user's profile information into the database
function profilec(){
  alert()
  name = String(document.getElementById("realname").value);
  wemail = String(document.getElementById("workemail").value);
  city = String(document.getElementById("location").value);
  subject = String(document.getElementById("subject").value);
  degree = String(document.getElementById("degree").value);
  var ref =  firebase.database().ref();
  //A reference is created with the name ref. Then, differents childs are added to that reference:
  ref.child("name").set(name)
  ref.child("wemail").set(wemail)
  ref.child("city").set(city)
  ref.child("subject").set(subject)
  ref.child("degree").set(degree)
  ref.orderByChild("name").equalTo("name").on('value',function(snapshot){
    console.log(snapshot.key)
  })
}
