
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyABg6Qnbn1VULh0ih0TUejcCHQLRTEWWs8",
      authDomain: "kwiter-4e167.firebaseapp.com",
      databaseURL: "https://kwiter-4e167-default-rtdb.firebaseio.com",
      projectId: "kwiter-4e167",
      storageBucket: "kwiter-4e167.appspot.com",
      messagingSenderId: "621163420350",
      appId: "1:621163420350:web:883521165c3f38ddf09cef",
      measurementId: "G-L6VV92PYRK"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding roomName"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
//send
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function redirectToRoomName(name) {
      console.log("name");
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
//logout
function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}