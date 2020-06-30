import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmW5ia2Fg2C1mJWF5MIcMHNiYeEs1Kl2Y",
  authDomain: "memory-game-6cab2.firebaseapp.com",
  databaseURL: "https://memory-game-6cab2.firebaseio.com",
  projectId: "memory-game-6cab2",
  storageBucket: "memory-game-6cab2.appspot.com",
  messagingSenderId: "992913835960",
  appId: "1:992913835960:web:f119dc3d6ec6cb0783714d",
  measurementId: "G-32ZQZWJGLC"
};

firebase.initializeApp(firebaseConfig);

export default firebase;