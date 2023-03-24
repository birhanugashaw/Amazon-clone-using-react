import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAjbby3CIrbKbN9Ta14FWURhBkYNxqbSM4",
  authDomain: "clone-c15fd.firebaseapp.com",
  projectId: "clone-c15fd",
  storageBucket: "clone-c15fd.appspot.com",
  messagingSenderId: "239454568495",
  appId: "1:239454568495:web:293c25cc9fbf873eb846da",
  measurementId: "G-PJCVCW9KHQ"
};
const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };

