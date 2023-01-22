import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config = {
    apiKey: "AIzaSyC_5caiUPSaSKi--5IYJ0j5Q-j_H474764",
    authDomain: "crown-clothing-e670e.firebaseapp.com",
    databaseURL: "https://crown-clothing-e670e-default-rtdb.firebaseio.com",
    projectId: "crown-clothing-e670e",
    storageBucket: "crown-clothing-e670e.appspot.com",
    messagingSenderId: "837513353681",
    appId: "1:837513353681:web:5b7dede6697a4fef1be8f0",
    measurementId: "G-V51XHGBM1T"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfile = async (userAuth, additionalData) => {
    if (!userAuth)
        return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef, 'user ref')
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdDate = new Date()

        try {
            await userRef.set({
                email,
                displayName,
                createdDate
            });
        } catch (error) {
            console.log(error, 'error creating user.')
        }
    }

    return userRef;
}

export default firebase;