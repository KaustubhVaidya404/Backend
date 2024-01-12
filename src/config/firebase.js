import firebase from "firebase";

const APIKEY = process.env.APIKEY;
const AUTHDOMAIN = process.env.AUTHDOMAIN;
const PROJECTID = process.env.PROJECTID;
const STORAGEBUCKET = process.env.STORAGEBUCKET;
const MESSANGINGSENDERID = process.env.MESSANGINGSENDERID;
const APPID = process.env.APPID;

const firebaseConfig = firebase.initializeApp({
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSANGINGSENDERID,
    appId: APPID
  });

export default firebaseConfig;