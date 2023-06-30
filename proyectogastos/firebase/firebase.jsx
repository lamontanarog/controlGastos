import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBo35Y32VfPIsjFqffPzoD-lrumSnmpHFc",
    authDomain: "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN",
    projectId: "controldegastos-9f556",
    storageBucket: "controldegastos-9f556.appspot.com",
    messagingSenderId: "process.env.REACT_APP_FIREBASE_MSG_ID",
    appId:"process.env.REACT_APP_FIREBASE_APP_ID"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
export const auth = getAuth(app);