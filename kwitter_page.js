var firebaseConfig = {
      apiKey: "AIzaSyDr3MWmZ5QNC13e_oj8eTy-xS17BvzaqWw",
      authDomain: "textator-15c4e.firebaseapp.com",
      databaseURL: "https://textator-15c4e-default-rtdb.firebaseio.com",
      projectId: "textator-15c4e",
      storageBucket: "textator-15c4e.appspot.com",
      messagingSenderId: "711930277062",
      appId: "1:711930277062:web:d41460df0718a7c5bc7bc7"
    };
firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_room.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}

getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_room.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}