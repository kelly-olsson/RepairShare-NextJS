import React, { useEffect } from 'react';
import firebaseApp from '@/lib/firebase/firebaseInit';
import 'firebaseui/dist/firebaseui.css'
import { getAuth, EmailAuthProvider, GoogleAuthProvider, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';

const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: (authResult: any) => {
      // On successful login, you can get the user token here
      authResult.user.getIdToken().then((token: string) => {
        console.log(token)
        // Send this token to your server
      });
      return true;
    }
  },
  signInFlow: 'popup',
};

const Auth = () => {
  useEffect(() => {
    const firebaseui = require('firebaseui');
    const auth = getAuth(firebaseApp);
    if (isSignInWithEmailLink(auth, window.location.href)) {
      var email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
    if (email) {
        signInWithEmailLink(auth, email, window.location.href)
            .then((result) => {
                window.localStorage.removeItem('emailForSignIn');
            })
            .catch((error) => {
                console.error(error);
            });
    } else {
        console.log('No email');
    }
    } else {
      const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
      ui.start('#firebaseui-auth-container', uiConfig);
    }
  }, []);

  return (
    <div>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  );
};

export default Auth;
