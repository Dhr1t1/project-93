var firebaseConfig = {
      apiKey: "AIzaSyD9bnPElskkxPeUKJxmX_Lwx4pf-0f-5hY",
      authDomain: "project-93-de053.firebaseapp.com",
      projectId: "project-93-de053",
      storageBucket: "project-93-de053.appspot.com",
      messagingSenderId: "524554112409",
      appId: "1:524554112409:web:de41c45edf4f293fc11708"
    };
    firebase.database= initializeApp(firebaseConfig);
    
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
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
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