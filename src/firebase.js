import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBl-t9gvGZVXbhVFm6tqJUz5d8NXEJhQbg",
  authDomain: "netflix-clone-155d3.firebaseapp.com",
  projectId: "netflix-clone-155d3",
  storageBucket: "netflix-clone-155d3.firebasestorage.app",
  messagingSenderId: "618800491017",
  appId: "1:618800491017:web:4a0cfad50f67e71da5a6d8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)