import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase.init";

const Login = () => {
  const [user, setUser] = useState();
  const auth = getAuth(app);
  console.log(app);
  const googleprovider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup (auth, githubProvider)
    .then(result => {
        const loggedUser = result.user
        console.log(loggedUser);
        setUser(loggedUser)
    })
    
    .catch(error =>{
        console.log(error);
    } )
  }


  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {user ? 
        <button onClick={handleSignOut}>Sign out</button>
      : 
        <div>
          <button onClick={handleGoogleSignIn}>Google LogIn</button>
          <button onClick={handleGitHubSignIn}>GitHub Login</button>
        </div>
      }

      {user && (
        <div>
          <h3>User : {user.displayName}</h3>
          <p>Email :{user.email} </p>
          <img src={user.photoURL} alt="" />
          <p>UserId : {user.uid}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
