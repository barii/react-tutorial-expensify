import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDYrkyTv93l2s4o2EECvN6_iUZcSrOd4Ug",
  authDomain: "expensify-2efa7.firebaseapp.com",
  databaseURL: "https://expensify-2efa7.firebaseio.com",
  projectId: "expensify-2efa7",
  storageBucket: "expensify-2efa7.appspot.com",
  messagingSenderId: "813906189987"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// firebase.database().ref().set({
//   name: 'Tamas Barabas'
// });