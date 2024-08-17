import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDhOBYudf2WFIV4aurwMo3u6te4HZNf2Vg",
    authDomain: "acuacode-89170.firebaseapp.com",
    projectId: "acuacode-89170",
    storageBucket: "acuacode-89170.appspot.com",
    messagingSenderId: "970196897911",
    appId: "1:970196897911:web:c0e5f780b2af847ce9f672",
    measurementId: "G-TDNTENXPKD"
  };
  
// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };