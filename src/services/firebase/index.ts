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
    arrayRemove,
    getDoc,
    DocumentData
} from "firebase/firestore";

import { AddOrRemoveFavoriteFilm, FavoriteList } from "../../store/ducks/user";
import { getFavoriteList } from "../../store/sagas/user";

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

type UserDB = {
    favoriteList: FavoriteList | undefined;
}

export const database = {
    async getFavoriteList(id: string) {
        try {
            const response = await  getDoc(doc(db, "users", id));
            const userDb = response.data() as UserDB | undefined;
            return userDb?.favoriteList;
        } catch {
            return undefined;
        }  
    },

    async addFavoriteFilm(data: AddOrRemoveFavoriteFilm) {
        await setDoc(doc(db, "users", data.userID), {
            favoriteList: arrayUnion(data.film)
        }, { merge: true });
    },

    async removeFavoriteFilm(data: AddOrRemoveFavoriteFilm) {
        await setDoc(doc(db, "users", data.userID), {
            favoriteList: arrayRemove(data.film)
        }, { merge: true });
    }
};