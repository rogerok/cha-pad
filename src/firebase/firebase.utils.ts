import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDg3I1Tiwqc3RscSebYyIVKvM_EtW4B4Sg",
  authDomain: "tea-pad.firebaseapp.com",
  projectId: "tea-pad",
  storageBucket: "tea-pad.appspot.com",
  messagingSenderId: "734993224812",
  appId: "1:734993224812:web:9713eed813cdf86e8b7449",
  measurementId: "G-0PEKN2Y33W",
  /*   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID, */
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const createUserProfileDocument = async (
  userAuth: { displayName: string; email: string; uid: string },
  additionalData?: {}
) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        ...additionalData,
        displayName,
        email,
        createdAt,
      });
    } catch (err: any) {
      console.log("creating profile error ", err.message);
    }
  }
  return userRef;
};

export const uploadPhotoToStore = async (
  teaPhoto: { image: File | null },
  teaGrade: string
) => {
  if (!teaPhoto.image) return;
  const storageRef = firebaseStorage.ref(
    `images/tea/${teaGrade}/${teaPhoto.image?.name}`
  );

  await storageRef.put(teaPhoto.image as File).on(
    "state_changed",
    (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(percentage);
    },
    (err) => {
      throw new Error("Что-то пошло не так...");
    }
  );
  return await storageRef.getDownloadURL();
};

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const firebaseStorage = firebase.storage();

export default firebase;
