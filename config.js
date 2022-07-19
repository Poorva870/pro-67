import firebase from 'firebase';

// add SDK Firebase

const firebaseConfig = {
    apiKey: "AIzaSyAe3zBUrmggMKYTa8nfDQO30VWu-SW-5es",
    authDomain: "pro-67-826bd.firebaseapp.com",
    databaseURL: "https://pro-67-826bd-default-rtdb.firebaseio.com",
    projectId: "pro-67-826bd",
    storageBucket: "pro-67-826bd.appspot.com",
    messagingSenderId: "996332014628",
    appId: "1:996332014628:web:ffbcfbd3c2fc2015ec1cb1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();