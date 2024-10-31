// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKCY-QS3QZinh0NhOdcpJOGaQaBVf9EBg",
  authDomain: "mybooks-d70f5.firebaseapp.com",
  projectId: "mybooks-d70f5",
  storageBucket: "mybooks-d70f5.appspot.com",
  messagingSenderId: "25068713002",
  appId: "1:25068713002:web:4651264c82831d6a7a3f53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
const db = getFirestore(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export default { auth, db };
