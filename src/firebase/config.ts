// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiGTna86v7xptv8P8dgA1qxcCiS8_qAic",
  authDomain: "astro-authentication-c86b2.firebaseapp.com",
  projectId: "astro-authentication-c86b2",
  storageBucket: "astro-authentication-c86b2.appspot.com",
  messagingSenderId: "571809777050",
  appId: "1:571809777050:web:ba53e2b3415142ec63a623",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "es";

export const firebase = {
  app,
  auth,
};
