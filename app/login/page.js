"use client"


import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Login() {

    const googleAuth = new GoogleAuthProvider();

    const login = async () => {

        const result = await signInWithPopup(auth, googleAuth);

    }





    return (
        <div>
            <button onClick={login}>Sign in with Google</button>
        </div>
    );
}
