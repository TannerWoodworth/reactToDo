import firebase from 'firebase';

try {
	var config = {
    apiKey: "AIzaSyB2-f9tVKLIpleO3_nV03OD5OgL5CcO30M",
    authDomain: "reacttodo-12c92.firebaseapp.com",
    databaseURL: "https://reacttodo-12c92.firebaseio.com",
    projectId: "reacttodo-12c92",
    storageBucket: "reacttodo-12c92.appspot.com",
    messagingSenderId: "167857712158"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var fbRef = firebase.database().ref();
export default firebase;