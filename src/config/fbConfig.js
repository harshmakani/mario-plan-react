import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
var config = {
  apiKey: 'AIzaSyA28RutLFineidf3V2-sTZDVUk3B0VOHp4',
  authDomain: 'harsh-mario-plan.firebaseapp.com',
  databaseURL: 'https://harsh-mario-plan.firebaseio.com',
  projectId: 'harsh-mario-plan',
  storageBucket: 'harsh-mario-plan.appspot.com',
  messagingSenderId: '682373808166',
  appId: '1:682373808166:web:6986705de4fa6dc4',
};
// Initialize Firebase
firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
