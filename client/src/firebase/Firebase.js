import app from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyC_Q4PGtwPPXaRF-AlpwLuESm8v5fci7Ak",
  authDomain: "fantasticsix-team.firebaseapp.com",
  databaseURL: "https://fantasticsix-team.firebaseio.com",
  projectId: "fantasticsix-team",
  storageBucket: "fantasticsix-team.appspot.com",
  messagingSenderId: "984917873565",
  appId: "1:984917873565:web:f8c6120373aa8916b6d574"
}

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore()
  }
  // *** Auth API ***
  getUser = () =>
    this.auth.currentUser

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
}
export default new Firebase();