//import firebase from "firebase";
import firebase from "firebase/app";
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
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const unsubscribeFromAuth = () => {};

type User = firebase.User;

export const createUserProfileDocument = async (
  userAuth: User,
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
  const uploadTask = firebaseStorage
    .ref(`images/tea/${teaGrade}/${teaPhoto.image?.name}`)
    .put(teaPhoto.image);

  let photoUrl: string | null = null;
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(percentage);
    },
    (err) => {
      throw new Error(`Что-то пошло не так ${err.message} `);
    },
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        photoUrl = downloadURL;
      });
    }
  );
  console.log(photoUrl);
  return photoUrl;
};

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const firebaseStorage = firebase.storage();

export default firebase;
