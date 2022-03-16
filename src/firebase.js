
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDie4JQp4fgnPx9YrYJtpimbqWNr7ZqG3Y",
    authDomain: "linkedin-clone-24074.firebaseapp.com",
    projectId: "linkedin-clone-24074",
    storageBucket: "linkedin-clone-24074.appspot.com",
    messagingSenderId: "478110188628",
    appId: "1:478110188628:web:0b87e2cf45f4af478619c1"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };