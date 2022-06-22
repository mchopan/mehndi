// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCJ9qcNHeyStw4WTRf_kuvIZlxpLmyNnf8",
  authDomain: "naaz-mehndi.firebaseapp.com",
  projectId: "naaz-mehndi",
  storageBucket: "naaz-mehndi.appspot.com",
  messagingSenderId: "601706396946",
  appId: "1:601706396946:web:d955b59320fc6fb996c7cb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;