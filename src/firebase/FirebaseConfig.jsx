import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB9f6a6FR4o6BDV-UTvI-wdqWIWlPI4Hzg",
  authDomain: "myecomercefirebase.firebaseapp.com",
  projectId: "myecomercefirebase",
  storageBucket: "myecomercefirebase.appspot.com",
  messagingSenderId: "498961767813",
  appId: "1:498961767813:web:f0edbb7057d9e8a34af8ec",
  measurementId: "G-9KN09QPS1S"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }