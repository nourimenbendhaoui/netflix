import Firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config ={
    apiKey: "AIzaSyDB8AJzodlxRTdRapePrWp8daBrNQHHDw0",
    authDomain: "netflix-3b053.firebaseapp.com",
    databaseURL: "https://netflix-3b053-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "netflix-3b053",
    storageBucket: "netflix-3b053.appspot.com",
    messagingSenderId: "366031088154",
    appId: "1:366031088154:web:89f573eec0656e8793bfa3"
    };

const firebase = Firebase.initializeApp(config);
seedDatabase(firebase);
export {firebase};