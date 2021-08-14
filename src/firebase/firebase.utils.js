import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBSWjbNo0ctgI19PlM7IGezeWpH7Kt4w7c',
  authDomain: 'ztm-react-93c1f.firebaseapp.com',
  projectId: 'ztm-react-93c1f',
  storageBucket: 'ztm-react-93c1f.appspot.com',
  messagingSenderId: '286828833741',
  appId: '1:286828833741:web:cf5ffeaaf6a50801503284',
  measurementId: 'G-7B7KY7WJWG',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
