
var firebaseConfig = {
      apiKey: "AIzaSyBaaSwIbM6Aw97ZVG5bHTAMBUWYdD7V1UI",
      authDomain: "kwitter-project-3a2b1.firebaseapp.com",
      databaseURL: "https://kwitter-project-3a2b1-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-3a2b1",
      storageBucket: "kwitter-project-3a2b1.appspot.com",
      messagingSenderId: "596107119488",
      appId: "1:596107119488:web:a573bf6c9936d539394f65"
    };
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="WELCOME "+user_name;

    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          localStorage.setItem("room_name",room_name);
          firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
          window.location="kwitter_page 2.html";
    }

    function logout()
    {
          window.location="index.html";
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
    }
    
    


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " +Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}


