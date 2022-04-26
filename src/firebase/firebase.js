import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBfTUNVhdI6EZz5DZ_RYaYJHCy9INTfBbc",
    authDomain: "we-zeroes.firebaseapp.com",
    projectId: "we-zeroes",
    storageBucket: "we-zeroes.appspot.com",
    messagingSenderId: "394455878801",
    appId: "1:394455878801:web:743404db0bb03631d04330",
    measurementId: "G-F9HGDWMGGZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase }