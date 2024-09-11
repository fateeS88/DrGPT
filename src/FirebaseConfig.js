// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBvUrA-4CmUy76Mxatr48DghlNvyIlHfE",
  authDomain: "medical-knowledge-graph-llm.firebaseapp.com",
  projectId: "medical-knowledge-graph-llm",
  storageBucket: "medical-knowledge-graph-llm.appspot.com",
  messagingSenderId: "526955786681",
  appId: "1:526955786681:web:6d9a38854e715f97e54668",
  measurementId: "G-1J8DX5ZKD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
// const analytics = getAnalytics(app);