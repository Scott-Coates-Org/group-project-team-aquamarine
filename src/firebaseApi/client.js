import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "@firebase/auth";
import "@firebase/storage";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseKey = process.env.REACT_APP_FIREBASE_API_KEY;
const firebaseProjectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const firebaseAuthDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const firebaseStorageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const firebaseMessaginSenderId =
  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
const firebaseAppId = process.env.REACT_APP_FIREBASE_APP_ID;

const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessaginSenderId,
  appId: firebaseAppId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };


