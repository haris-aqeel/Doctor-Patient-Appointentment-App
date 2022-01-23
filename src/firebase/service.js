import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCuDv0lgkOAT34BtAOjfEBZ3tTowVqni_Q",
  authDomain: "doctor-patient-appointment.firebaseapp.com",
  projectId: "doctor-patient-appointment",
  storageBucket: "doctor-patient-appointment.appspot.com",
  messagingSenderId: "308503717738",
  appId: "1:308503717738:web:dbe23df52be19ac650a713"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;