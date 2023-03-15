// Import the functions you need from the SDKs you need
// @ts-ignore
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// @ts-ignore
import{getStorage,ref,getDownloadURL,uploadBytesResumable,deleteObject} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";
import {API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESS_ID, APP_ID, MEASURE_ID} from "$env/static/private";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESS_ID,
    appId: APP_ID,
    measurementId: MEASURE_ID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage=getStorage(app);

export{ projectStorage,ref,getDownloadURL,uploadBytesResumable,deleteObject}
