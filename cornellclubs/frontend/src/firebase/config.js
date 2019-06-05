import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDgLMyix7uYcSlvLq0IAAFqDxg2j3QJz-c',
  authDomain: 'cornell-clubs.firebaseapp.com',
  databaseURL: 'https://cornell-clubs.firebaseio.com',
  projectId: 'cornell-clubs',
  storageBucket: 'cornell-clubs.appspot.com',
  messagingSenderId: '1030476234221',
  appId: '1:1030476234221:web:d9c1b0168afbbf57'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
