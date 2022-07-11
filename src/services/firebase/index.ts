import { initializeApp } from "firebase/app";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import firebaseConfig from "./firebaseConfig";


const app = initializeApp(firebaseConfig);
const auth = getAuth();

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