
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAmfydQTuTu7_C7lE9Aj5qrTuG6DpmRUpg",
    authDomain: "react-cvr.firebaseapp.com",
    projectId: "react-cvr",
    storageBucket: "react-cvr.appspot.com",
    messagingSenderId: "836144942650",
    appId: "1:836144942650:web:c64a18d3b0adf162d06f03",
    measurementId: "G-0J9VK5C3HW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore();