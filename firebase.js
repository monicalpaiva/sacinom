import { initializeApp } from './node_modules/firebase/app';
import { getFirestore, collection, getDocs, addDoc  } from './node_modules/firebase/firestore/lite';

const config = {
    apiKey: "AIzaSyD8ro0Pog6cZk1R5EDZpk1urMpCfNTKnrY",
    authDomain: "poeminhas-763a0.firebaseapp.com",
    projectId: "poeminhas-763a0",
    storageBucket: "poeminhas-763a0.appspot.com",
    messagingSenderId: "655768243586",
    appId: "1:655768243586:web:ca9acbdfbc772625ea539b",
    measurementId: "G-NPBNH4ZPSX"
};

const app = initializeApp(config);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc }