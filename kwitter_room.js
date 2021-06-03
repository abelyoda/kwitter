var firebaseConfig = {
      apiKey: "AIzaSyDTc_1lm1x5m_E0G1Yl8G-PrCHkrHUY62U",
      authDomain: "kwitter-fixer.firebaseapp.com",
      databaseURL: "https://kwitter-fixer-default-rtdb.firebaseio.com",
      projectId: "kwitter-fixer",
      storageBucket: "kwitter-fixer.appspot.com",
      messagingSenderId: "5707555395",
      appId: "1:5707555395:web:553aa03e33b72a56216af6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      user_name = localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
      
      function addRoom()
      {
        room_name = document.getElementById("room_name").value;
      
        firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
        });
      
          localStorage.setItem("room_name", room_name);
          
          window.location = "kwitter_page.html";
      }
      
      function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
             Room_names = childKey;
             console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
          });
        });
      
      }
      
      getData();
      
      function redirectToRoomName(name)
      {
        console.log(name);
        localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
      }
      
      function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }
      
      //End code
      });});}
getData();
