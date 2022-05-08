import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGzjYlHMClyCmzydZldnUsgLyHrBm2zFw",
  authDomain: "linkedin-clone-yt-703db.firebaseapp.com",
  projectId: "linkedin-clone-yt-703db",
  storageBucket: "linkedin-clone-yt-703db.appspot.com",
  messagingSenderId: "323889424653",
  appId: "1:323889424653:web:c5dfcf86eedf244b51e844"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
