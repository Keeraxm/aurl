const { initializeApp } = require("firebase/app");
const { getFirestore,
    doc, 
    addDoc,
    collection,
    getDoc,
} = require("firebase/firestore");
const { errorHandler } = require("./helpers.js");

const {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGE_SENDER_ID,
    FIREBASE_APP_ID,
    FIRBASE_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGE_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIRBASE_MEASUREMENT_ID,
}

let app;
let firestoreDb;

const initializeFirebaseApp = () => {
    try {
        app = initializeApp(firebaseConfig);
        firestoreDb = getFirestore();
        return app;
    } catch (error) {
        errorHandler(error, "firebase-initializeFirebaseApp");
    }
}

const postData = async (body) => {
    try {
        const docRef = await addDoc(collection(firestoreDb, "urls"), body)
        return docRef.id;
    } catch (error) {
        errorHandler(error, "firebase-postData");
    }

}

const getData = async (id) => {
    try {
        const docRef = doc(firestoreDb, "urls", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log(docSnap.data()["url"]);
            return docSnap.data()["url"];
        } else {
            console.log("Doc does not exist.")
            return "Document does not exist.";
        }
        
    } catch(error) {
        errorHandler(error, "firebse-getData");
    }
};

const getFirebaseApp = () => app;

module.exports = {
    initializeFirebaseApp,
    getFirebaseApp,
    postData,
    getData,
}