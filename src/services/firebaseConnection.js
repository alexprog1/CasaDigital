import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyBkqMK43tIPUd4d0VDoWxgt8XLGnNJz3ZI",
    authDomain: "casadigitalpro.firebaseapp.com",
    projectId: "casadigitalpro",
    storageBucket: "casadigitalpro.appspot.com",
    messagingSenderId: "200398411789",
    appId: "1:200398411789:web:e0a7be64bfc71106c15d44"
  };

if(!firebase.apps.length) {
  // Abrir minha conexao
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
/*
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const fuctions = firebase.fuctions();

  export {db, auth, storage, fuctions};
*/