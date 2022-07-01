import firebase from "firebase/compat/app" 
import "firebase/compat/auth" 


const firebaseConfig = {
    apiKey: "AIzaSyDCPYxkQALrp2NwrZYmZBytacED-IcOKgA",
    authDomain: "auth-redux-19622.firebaseapp.com",
    projectId: "auth-redux-19622",
    storageBucket: "auth-redux-19622.appspot.com",
    messagingSenderId: "524085920894",
    appId: "1:524085920894:web:f03af20a1ae21176a3842f"
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyBi7G_yloczaIl_gNlj7LO5SWLl_aUp6jU",
//   authDomain: "galvanic-camp-341607.firebaseapp.com",
//   projectId: "galvanic-camp-341607",
//   storageBucket: "galvanic-camp-341607.appspot.com",
//   messagingSenderId: "909146749930",
//   appId: "1:909146749930:web:1adfe0a56a3aa17a881093",
//   measurementId: "G-BEXHGC7E8J"
// };
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  
  export {auth,provider}