import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, set, ref, update, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAWUAsOOdAW-2DAGArTigYgHMOJawbrzz0",
   authDomain: "dinojs-d3bbb.firebaseapp.com",
   databaseURL: "https://dinojs-d3bbb-default-rtdb.firebaseio.com",
   projectId: "dinojs-d3bbb",
   storageBucket: "dinojs-d3bbb.appspot.com",
   messagingSenderId: "490253174560",
   appId: "1:490253174560:web:fc922989c7495b94ed3945",
   measurementId: "G-1CQL8MFVGD"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

//   ------signup------
document.getElementById("signup").addEventListener("click", (e) => {
   e.preventDefault();
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         // Signed in
         const user = userCredential.user;

         set(ref(database, 'users/' + user.uid),{
            email: email,
         })

         alert("user created!");
         // ...
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         alert(errorMessage);
         // ..
      });
});
