import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB7_kicePAfpfPuh25EtG6n7pgJJTDkRPw",
  databaseURL: "https://rotina4-a0e5f-default-rtdb.firebaseio.com/",
  authDomain: "rotina4-a0e5f.firebaseapp.com",
  projectId: "rotina4-a0e5f",
  storageBucket: "rotina4-a0e5f.firebasestorage.app",
  messagingSenderId: "280824786661",
  appId: "1:280824786661:web:3d08a3b3c453c2bafdae0c",
  measurementId: "G-RE2K4089WZ"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);