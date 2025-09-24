// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAtmhynJQNGQNXb2YjNdC6ll8XGw50PAfY",
  authDomain: "ditxwebsite.firebaseapp.com",
  databaseURL: "https://ditxwebsite-default-rtdb.firebaseio.com",
  projectId: "ditxwebsite",
  storageBucket: "ditxwebsite.firebasestorage.app",
  messagingSenderId: "273723424384",
  appId: "1:273723424384:web:2d29ba539e7d9619b8b065",
  measurementId: "G-931NBVTBFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };







