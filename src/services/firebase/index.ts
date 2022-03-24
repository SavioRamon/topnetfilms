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
            const result = await signInWithPopup(auth, provider);
            return result.user;
        } catch (error: any) {
            alert(error.message);
        };
    },

    async autoLogin(setUser: (user: {})=>void) {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }
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