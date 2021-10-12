import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg3I1Tiwqc3RscSebYyIVKvM_EtW4B4Sg",
  authDomain: "tea-pad.firebaseapp.com",
  projectId: "tea-pad",
  storageBucket: "tea-pad.appspot.com",
  messagingSenderId: "734993224812",
  appId: "1:734993224812:web:9713eed813cdf86e8b7449",
  measurementId: "G-0PEKN2Y33W",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("creating profile error ", err.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
