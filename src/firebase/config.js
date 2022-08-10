import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHNNqTLS5vCB0639CNYQxxudVIsuyS-Y4",
  authDomain: "chat-app-6565a.firebaseapp.com",
  projectId: "chat-app-6565a",
  storageBucket: "chat-app-6565a.appspot.com",
  messagingSenderId: "883321942086",
  appId: "1:883321942086:web:bf717ea778b23e48bb1a47",
  measurementId: "G-PNBSBCH3JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth}