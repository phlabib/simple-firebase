import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase.init';

const Login = () => {
    const [user, setUser] = useState ();
    const auth = getAuth (app);
    console.log(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider) 
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null) 
        } )
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
           {  user?
           <button onClick={handleSignOut}>Sign out</button> :
            <button onClick={handleGoogleSignIn}>Google LogIn</button>}
            {user && <div>
            <h3>User : {user.displayName}</h3>
            <p>Email :{user.email} </p>
            <img src={user.photoURL} alt="" />
            <p>UserId : {user.uid}</p>
            </div>}
        </div>
    );
};

export default Login;