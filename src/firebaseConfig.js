// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, increment, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDCCZoirV4EocFwvWiZg6po--8D3UZsjQ",
  authDomain: "trumpvsbiden-63a2f.firebaseapp.com",
  projectId: "trumpvsbiden-63a2f",
  storageBucket: "trumpvsbiden-63a2f.appspot.com",
  messagingSenderId: "6732489835",
  appId: "1:6732489835:web:28ff3cd57f68120f1d7d2e",
  measurementId: "G-VK5T39Z0ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, increment, onValue };
