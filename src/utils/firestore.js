import { getAuth } from '@firebase/auth';
import { doc, getDoc, getFirestore, setDoc, collection} from 'firebase/firestore'
//Google firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvMK5yb92il03SuQC5lXtlCSWUDDvRB40",
    authDomain: "home-stock-manager-380714.firebaseapp.com",
    projectId: "home-stock-manager-380714",
    storageBucket: "home-stock-manager-380714.appspot.com",
    messagingSenderId: "542142689373",
    appId: "1:542142689373:web:a7830856238ac2d9dd5db4"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth()

export const saveList = async (listName, updatedList) => {
    const list = doc(db, listName, auth.currentUser.uid);
    await setDoc(list, {
        list: updatedList
    })
}

export const getList = async (listName) => {
    const ref = doc(db, listName, auth.currentUser.uid);
    const snap = await getDoc(ref);

    if(snap.exists()) {
        return snap.data().list;
    } else {
        return [];
    }
}
