import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA4H786rjb0mN0u7JffDhbUgWFXroP3e3I",
    authDomain: "linkedin-nmclone.firebaseapp.com",
    projectId: "linkedin-nmclone",
    storageBucket: "linkedin-nmclone.appspot.com",
    messagingSenderId: "1081959799427",
    appId: "1:1081959799427:web:3c84013a3887bb98a859b6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export { db, auth };