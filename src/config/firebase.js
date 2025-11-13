import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-VaAxOGnXpr533P5nmqJJ2y7FKTyGSnQ",
  authDomain: "sinarai-official-system.firebaseapp.com",
  projectId: "sinarai-official-system",
  storageBucket: "sinarai-official-system.firebasestorage.app",
  messagingSenderId: "9442316357",
  appId: "1:9442316357:web:3be67b62b7e255ce0ed32c",
  measurementId: "G-K336BYLEQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Configure Google Provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export { app, analytics, auth, db, googleProvider };
