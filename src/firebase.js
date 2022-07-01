import firebase from "firebase/compat/app" 
import "firebase/compat/auth" 
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDCPYxkQALrp2NwrZYmZBytacED-IcOKgA",
    authDomain: "auth-redux-19622.firebaseapp.com",
    projectId: "auth-redux-19622",
    storageBucket: "auth-redux-19622.appspot.com",
    messagingSenderId: "524085920894",
    appId: "1:524085920894:web:f03af20a1ae21176a3842f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const db = firebase.firestore()
  export {auth,provider,db}
