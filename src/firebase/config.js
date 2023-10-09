import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBmMEweBZBofudDAFKjiTtVRYiDAnfFAZE",
  authDomain: "sample-project-70dee.firebaseapp.com",
  projectId: "sample-project-70dee",
  storageBucket: "sample-project-70dee.appspot.com",
  messagingSenderId: "1064943334034",
  appId: "1:1064943334034:web:597b27170163c497766c4b"
};


//initialize firebase
firebase.initializeApp(firebaseConfig)

//initialize services
const projectFirestore = firebase.firestore()

export { projectFirestore }