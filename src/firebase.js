import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6ldrT7m_QEAK8ApDqWIwlQX_-qlxh72o",
    authDomain: "kinlo-44bc8.firebaseapp.com",
    projectId: "kinlo-44bc8",
    storageBucket: "kinlo-44bc8.appspot.com",
    messagingSenderId: "937386174362",
    appId: "1:937386174362:web:42d98919aa67ea53f43c23",
    measurementId: "G-LJ4Q43V7BT"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  export { auth };