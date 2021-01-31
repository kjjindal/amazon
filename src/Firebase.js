import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCebDAElDqmWNCOEuuCL5FRh4pNSru7JcE",
    authDomain: "fir-63707.firebaseapp.com",
    projectId: "fir-63707",
    storageBucket: "fir-63707.appspot.com",
    messagingSenderId: "258059637099",
    appId: "1:258059637099:web:a21e408ba177ef43627c2e",
    measurementId: "G-H14Z3THQ68"
  };



  const firebaseapp=firebase.initializeApp(firebaseConfig);

  const db=firebaseapp.firestore();
  const auth=firebaseapp.auth();
  const storage=firebaseapp.storage();


  export {db,auth,storage}