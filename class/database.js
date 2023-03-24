import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { doc, getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBY4cF-cyJpThR4vjda1nTv5pbQ8KxWbes",
    authDomain: "nhom-3-jsi15.firebaseapp.com",
    projectId: "nhom-3-jsi15",
    storageBucket: "nhom-3-jsi15.appspot.com",
    messagingSenderId: "77008916485",
    appId: "1:77008916485:web:c0bf6d906827fd718a8c6c",
    measurementId: "G-2BWJGV6YRS"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const db = getFirestore(app)
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

    async getDataForEdit(name) {
        this.name = name

        const querySnapshot = await getDocs(collection(db, name));
        var tbodyEl = document.getElementById('container')
        var dataHTML = ''

        querySnapshot.forEach((doc) => {
            const data = doc.data()
            console.log(doc.id);

            var name = data.name
            var author = data.author
            var price = data.price
            var unit = data.currencyunit
            var category = data.category
            var desciption = data.desciption
            var url = data.url
            var publisher = data.publisher
            dataHTML += `<div class="content"><ul class='user-item'><strong>Name: <li></strong>${name}</li><strong>Author: <li></strong>${author}</li><strong>Publisher: <li></strong>${publisher}</li><strong>Category: <li></strong>${category}</li><strong>Desciption: <li></strong>${desciption}</li><strong>Price: <li></strong>${price}</li><p>${unit}</p><strong>Image Url: <li></strong>${url}</li><strong>ID: <li></strong>${doc.id}</li><div class="editBtn"><button class='btn edit-btn btn-warning'>Edit</button><button class='delete-btn btn btn-danger'>Delete</button></div></ul></div>`

            tbodyEl.innerHTML = dataHTML
        });
    }

    async updateData(name, id, objectData) {
        this.name = name;
        this.id = id;
        try {
            await updateDoc(doc(db, name, id), objectData)
            console.log("Success")
        } catch(e) {
            console.error(e)
        }
    }

    async deleteDocs(name, id) {
        this.name = name;
        this.id = id;
        try {
            await deleteDoc(doc(db, name, id))
            console.log("Deleted")
        } catch(e) {
            console.error(e)
        }
    }
}