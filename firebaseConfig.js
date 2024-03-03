import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDXEa7GuzT56RJbwrR0wEccbxejbvHaP1c',
  authDomain: 'AIzaSyDXEa7GuzT56RJbwrR0wEccbxejbvHaP1c',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'sniped-29a91',
  storageBucket: 'sniped-29a91.appspot.com',
  messagingSenderId: '770063023728',
  appId: '1:770063023728:web:f154373a9bd0e1789bfeb5',
  measurementId: 'G-D6MDKN6B6J',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
