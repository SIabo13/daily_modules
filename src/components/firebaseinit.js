import firebase from 'firebase'
import 'firebase/database'
import firebaseConfig from './firebaseConfig'


const firebaseApp = firebase.initializeApp(firebaseConfig);
 firebase.analytics();

 export default firebase.database();