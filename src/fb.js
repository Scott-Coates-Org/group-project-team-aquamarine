// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6a1MpgDoPm5j0Ijh4zCmOv76E3J0s5ak",
  authDomain: "team-aquamarine.firebaseapp.com",
  projectId: "team-aquamarine",
  storageBucket: "team-aquamarine.appspot.com",
  messagingSenderId: "394558346797",
  appId: "1:394558346797:web:c676043213cad9700c8aa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();