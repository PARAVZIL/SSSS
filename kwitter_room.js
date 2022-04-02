// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUlv6k3BWxnpqsmTj9UtANDHe-AQ0zkHQ",
    authDomain: "quitter-f4e68.firebaseapp.com",
    databaseURL: "https://quitter-f4e68-default-rtdb.firebaseio.com",
    projectId: "quitter-f4e68",
    storageBucket: "quitter-f4e68.appspot.com",
    messagingSenderId: "438447825861",
    appId: "1:438447825861:web:12a4a975820e9c58bee1ac"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}