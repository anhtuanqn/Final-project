import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBY4cF-cyJpThR4vjda1nTv5pbQ8KxWbes",
    authDomain: "nhom-3-jsi15.firebaseapp.com",
    projectId: "nhom-3-jsi15",
    storageBucket: "nhom-3-jsi15.appspot.com",
    messagingSenderId: "77008916485",
    appId: "1:77008916485:web:c0bf6d906827fd718a8c6c",
    measurementId: "G-2BWJGV6YRS"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

const db = getFirestore(app);z
const auth = getAuth()

export class Database {
    async signup(email, password) {
        this.username = email
        this.password = password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            const user = userCredential.user;
            console.log("success")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }

    async login(email, password) {
        this.username = this.email
        this.password = this.password

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Success", user)
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }
}