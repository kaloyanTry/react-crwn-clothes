import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAEbXICfwEBca8YA8Gb1qsRCx1z53YbaGY',
  authDomain: 'crwn-clothing-db-e2465.firebaseapp.com',
  projectId: 'crwn-clothing-db-e2465',
  storageBucket: 'crwn-clothing-db-e2465.appspot.com',
  messagingSenderId: '963560449554',
  appId: '1:963560449554:web:8309793ccd4c680b419acb',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithGooglePopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
};
