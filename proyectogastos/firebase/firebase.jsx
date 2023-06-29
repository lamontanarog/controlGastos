import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBo35Y32VfPIsjFqffPzoD-lrumSnmpHFc",
    authDomain: "controldegastos-9f556.firebaseapp.com",
    projectId: "controldegastos-9f556",
    storageBucket: "controldegastos-9f556.appspot.com",
    messagingSenderId: "1073071462510",
    appId: "1:1073071462510:web:6758e674bcbcbc4a46ae7f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
export const auth = getAuth(app);