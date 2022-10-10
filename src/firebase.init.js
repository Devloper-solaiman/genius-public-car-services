import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA01gpJQTmrWd7vqGPSgotBkoW4hBim0D4",
    authDomain: "genius-public-car-services.firebaseapp.com",
    projectId: "genius-public-car-services",
    storageBucket: "genius-public-car-services.appspot.com",
    messagingSenderId: "157345375215",
    appId: "1:157345375215:web:9c2b7508777c7349a14c1a"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth