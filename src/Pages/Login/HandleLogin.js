import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./fireConfig";

export const initializeFirebase = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email, photoURL, emailVerified } = res.user;
            const user = {
                name: displayName,
                email: email,
                photo: photoURL,
                emailVerified
            }
            return user;
        })
        .catch(error => {
            const errors = {}
            errors.error = error.message;
            return errors;
        });
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(() => {
            return null;
        })
        .catch(error => {
            console.log(error)
        })
}

export const getCurrentUser = () => {
    return new Promise((resolve) => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const { displayName, email, photoURL, emailVerified } = user;
                const currentUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    emailVerified
                }
                resolve(currentUser)
                // ...
            } else {
                resolve(user)
            }
        });
    });
}