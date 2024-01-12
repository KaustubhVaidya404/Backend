import * as firebaseinst from 'firebase-admin/app';
import * as firestoreinst from 'firebase-admin/firestore';

// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

// var serviceAccount = require("./serviceAccountKey.json");



firebaseinst.initializeApp({
  credential: firebaseinst.cert(
    "src/config/serviceAccountKey.json"
  )
});

const db = firestoreinst.getFirestore();

export default db;