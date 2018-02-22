
import firebase from 'firebase';
import 'firebase/firestore';
export const defaultApp=firebase.initializeApp( {
    apiKey: "AIzaSyC8Hqh5RFZr5PRir2rUp7cL7qlsYMRRYXw",
    authDomain: "webengi-fe73a.firebaseapp.com",
    databaseURL: "https://webengi-fe73a.firebaseio.com",
    projectId: "webengi-fe73a",
    storageBucket: "webengi-fe73a.appspot.com",
    messagingSenderId: "172012193896"
  })

export const db = firebase.firestore();


