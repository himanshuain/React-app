import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyArzpvWIJvnUggImCrk2stx_fM7Ct9VHAM",
    authDomain: "login-b0f37.firebaseapp.com",
    projectId: "login-b0f37",
    storageBucket: "login-b0f37.appspot.com",
    messagingSenderId: "455257460583",
    appId: "1:455257460583:web:90fc0fdbc8758c2a99a9c2"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;