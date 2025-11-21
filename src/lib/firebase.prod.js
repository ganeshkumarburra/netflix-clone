import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

//we need to somehow seed the database

//we need a config here, put your api details here 
const config = {
    apiKey: "AIzaSyDTlZfbbBcrsr2MFNimgp-R_KheOmVmNZA",
    authDomain: "netflix-clone-e55e4.firebaseapp.com",
    projectId: "netflix-clone-e55e4",
    storageBucket: "netflix-clone-e55e4.firebasestorage.app",
    messagingSenderId: "92955344134",
    appId: "1:92955344134:web:855a749aab21263fbff287"
};

const firebase = Firebase.initializeApp(config);

//dont uncomment this bcz it will dupliacte the database on firebase
//seedDatabase(firebase);

export { firebase };