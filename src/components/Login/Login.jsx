import React from 'react';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from '../../Firebase.init';

const Login = () => {
    const auth = getAuth (app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('google mama is coming')
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google LogIn</button>
        </div>
    );
};

export default Login;