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
  
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
  
      });
  
      document.getElementById("msg").value="";
  
  }
  
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
  //Start code
  
  //End code
      } });  }); }
  getData();
  
  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
  }