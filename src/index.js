import './sass/main.scss';
import { firebaseApp, database } from './firebase';
import { firebaseui } from 'firebaseui';
//import { firebase } from 'firebase';

var firebase = require('firebase');
/* var firebaseui = require('firebaseui'); */

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: './login.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  
};

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
