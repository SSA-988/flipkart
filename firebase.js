import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoPlYt0iMyRinxuWQFOhACakNc2USLhr8",
  authDomain: "flipkart-clone-b5f4c.firebaseapp.com",
  projectId: "flipkart-clone-b5f4c",
  storageBucket: "flipkart-clone-b5f4c.appspot.com",
  messagingSenderId: "44514265808",
  appId: "1:44514265808:web:d6d0ddad9347b4c3a16cd5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore();

export {auth,db};