import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Firebase Init file

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}


export default initializeAuthentication;