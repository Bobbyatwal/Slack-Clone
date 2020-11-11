import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTdX7Xn3C9jahjrPBp0r6jkcGl-qLvcUs",
  authDomain: "bobbyatwal-slack-clone.firebaseapp.com",
  databaseURL: "https://bobbyatwal-slack-clone.firebaseio.com",
  projectId: "bobbyatwal-slack-clone",
  storageBucket: "bobbyatwal-slack-clone.appspot.com",
  messagingSenderId: "161305319639",
  appId: "1:161305319639:web:8dae025d44cbc8519b7892",
  measurementId: "G-ENK2YV1YPB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
