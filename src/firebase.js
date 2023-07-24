import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyBTC9LgpmiMw_SXLlpuPn11M5U8zBcO9ok",
    authDomain: "linkedin-clone-c7b88.firebaseapp.com",
    projectId: "linkedin-clone-c7b88",
    storageBucket: "linkedin-clone-c7b88.appspot.com",
    messagingSenderId: "486210736935",
    appId: "1:486210736935:web:10559cd24091964170cf02"
  };


  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()

  export  {auth, provider, storage}
  export default db