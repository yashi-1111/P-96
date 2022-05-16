var firebaseConfig = {
  apiKey: "AIzaSyDlvXu8TxF5AJuE_24frFogs-wkX-8Wdng",
  authDomain: "class-93-3361e.firebaseapp.com",
  databaseURL: "https://class-93-3361e-default-rtdb.firebaseio.com",
  projectId: "class-93-3361e",
  storageBucket: "class-93-3361e.appspot.com",
  messagingSenderId: "644355739405",
  appId: "1:644355739405:web:b4387e69c02fb660712a44"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Hey  " +user_name + "!";

function addRoom(){
room_name= document.getElementById("room_name").value;

localStorage.setItem("room_name", room_name);
firebase.database().ref("/").child(room_name).update({
    purpose: "adding room"
});

window.location= "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name- " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomname(this.id);'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;

//End code
});});}
getData();

function redirectToRoomname(name){
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");

  window.location = "index.html";
}