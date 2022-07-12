import { initializeApp } from "firebase/app";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import {
    setDoc,
    doc,
    getFirestore,
    arrayUnion,
    arrayRemove
} from "firebase/firestore";

import { AddOrRemoveFavoriteFilm } from "../../store/ducks/user";

import firebaseConfig from "./firebaseConfig";


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export const authenticationAPI = {

    async googleAuth() {
        const provider = new GoogleAuthProvider();
        try {
            const account = await signInWithPopup(auth, provider);
            return account.user;
        } catch (error: any) {
            alert(error.message);
            return null;
        }
    },

    autoLogin() {
        return new Promise((resolve)=>{
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if(user) resolve(user);
                else resolve(null);
            });

            unsubscribe();
        })
        
    },

    async disconnectUser() {
        try {
            await signOut(auth);
            return true;
        } catch (error: any) {
            alert(error.message);
            return false;
        }
    }
};

export const database = {
    async addFavoriteFilm(data: AddOrRemoveFavoriteFilm) {
        await setDoc(doc(db, "users", data.userID), {
            favoriteFilms: arrayUnion(data.film)
        }, { merge: true });
    },

    async removeFavoriteFilm(data: AddOrRemoveFavoriteFilm) {
        await setDoc(doc(db, "users", data.userID), {
            favoriteFilms: arrayRemove(data.film)
        }, { merge: true });
    }
};