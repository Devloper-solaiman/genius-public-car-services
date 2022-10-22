import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: process.even.REACT_APP_apiKey,
    authDomain: process.even.REACT_APP_authDomain,
    projectId: process.even.REACT_APP_projectId,
    storageBucket: process.even.REACT_APP_storageBucket,
    messagingSenderId: process.even.REACT_APP_messagingSenderId,
    appId: process.even.REACT_APP_appId,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth