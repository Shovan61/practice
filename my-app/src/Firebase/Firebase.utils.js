import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxfwSty_aJv4fMMqg5vIly_2q9RtahGcw",
  authDomain: "test-3366b.firebaseapp.com",
  projectId: "test-3366b",
  storageBucket: "test-3366b.appspot.com",
  messagingSenderId: "270537639903",
  appId: "1:270537639903:web:e4777d67d014f2ef42e66a",
  measurementId: "G-ZN8ZYEPB7Z",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
