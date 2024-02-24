import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCkJvCAvNeMQcOPGWOJ1DEGpYku_0Dvz_o",
  authDomain: "base-2239c.firebaseapp.com",
  projectId: "base-2239c",
  storageBucket: "base-2239c.appspot.com",
  messagingSenderId: "323590990106",
  appId: "1:323590990106:web:2789addeaf1b4c33ff24a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);