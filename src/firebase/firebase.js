// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {



  apiKey: "AIzaSyCnD09b1Q73DSLUdQ9ekAKP37NZaN8FECw",
  authDomain: "loginauth-b35cd.firebaseapp.com",
  projectId: "loginauth-b35cd",
  storageBucket: "loginauth-b35cd.appspot.com",
  messagingSenderId: "623981055703",
  appId: "1:623981055703:web:ea2b5da214d16272e6ea92"


  // apiKey: "AIzaSyBJRQ1OQCpqh_ag2pKjxz-MkSKFVWdV5ck",
  // authDomain: "simpleauth4dashboard.firebaseapp.com",
  // projectId: "simpleauth4dashboard",
  // storageBucket: "simpleauth4dashboard.appspot.com",
  // messagingSenderId: "98320295231",
  // appId: "1:98320295231:web:6fe38cb6ac630ae56cdf8a",
  // measurementId: "G-G3XLPCWVPX"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCnD09b1Q73DSLUdQ9ekAKP37NZaN8FECw",
//   authDomain: "loginauth-b35cd.firebaseapp.com",
//   projectId: "loginauth-b35cd",
//   storageBucket: "loginauth-b35cd.appspot.com",
//   messagingSenderId: "623981055703",
//   appId: "1:623981055703:web:ea2b5da214d16272e6ea92"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);