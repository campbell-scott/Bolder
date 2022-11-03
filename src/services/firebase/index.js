import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB70-17zf71asLK-LTMkfLwNyC5f_mxSoY",
  authDomain: "bolder-cd96c.firebaseapp.com",
  projectId: "bolder-cd96c",
  storageBucket: "bolder-cd96c.appspot.com",
  messagingSenderId: "1087466811443",
  appId: "1:1087466811443:web:74934cc6082c860de13346"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)