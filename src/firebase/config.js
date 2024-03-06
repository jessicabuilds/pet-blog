import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp9TK_Oe-aNUAziOkbZmznpT_AXOctiTI",
  authDomain: "pet-blog-f9e63.firebaseapp.com",
  projectId: "pet-blog-f9e63",
  storageBucket: "pet-blog-f9e63.appspot.com",
  messagingSenderId: "101499513343",
  appId: "1:101499513343:web:33f69caca68c7b346b9fca"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };