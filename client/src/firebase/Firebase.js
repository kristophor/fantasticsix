import app from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore"

const config = {
  apiKey: "",
  authDomain: "fantasticsix-team.firebaseapp.com",
  databaseURL: "https://fantasticsix-team.firebaseio.com",
  projectId: "fantasticsix-team",
  storageBucket: "fantasticsix-team.appspot.com",
  messagingSenderId: "",
  appId: ""
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
