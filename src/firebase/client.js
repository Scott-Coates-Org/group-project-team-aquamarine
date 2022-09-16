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

const firebaseConfig = {
  apiKey: "AIzaSyB6a1MpgDoPm5j0Ijh4zCmOv76E3J0s5ak",
  authDomain: "team-aquamarine.firebaseapp.com",
  projectId: "team-aquamarine",
  storageBucket: "team-aquamarine.appspot.com",
  messagingSenderId: "394558346797",
  appId: "1:394558346797:web:c676043213cad9700c8aa4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
