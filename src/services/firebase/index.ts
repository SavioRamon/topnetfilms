import { initializeApp } from "firebase/app";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

import firebaseConfig from "./firebaseConfig";


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const authenticationAPI = {

    async googleAuth() {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error: any) {
            alert(error.message);
        };
    },

    autoLogin(callback: (user: {} | null)=>void) {
        onAuthStateChanged(auth, (user) => {

            if(user) callback(user);
            else callback(null);
        });
    },

    async disconnectUser() {
        try {
            const result = await signOut(auth);
            return result;
        } catch (error: any) {
            alert(error.message);
        };
    }
};