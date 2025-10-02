import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCf8WYVnx04iydR-kBfgU_2mLWAItLLIok",
    authDomain: "form-porta.firebaseapp.com",
    projectId: "form-porta",
    storageBucket: "form-porta.firebasestorage.app",
    messagingSenderId: "113688715367",
    appId: "1:113688715367:web:69065ad26cfb3e37edf4c2",
    measurementId: "G-HCQX9QPRN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
 
const form = document.getElementById("contacto-form");
 
form.addEventListener("submit", async (e) => {
    e.preventDefault();
 
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    const fecha = new Date();
 
 
    try {
        await addDoc(collection(db, "Clientes"), {
            nombre: nombre,
            email: email,
            asunto: asunto,
            mensaje: mensaje,
            fecha: fecha
        });
        console.log("Datos enviados");
        alert("Solicitud enviada");
        form.reset();
    } catch (error) {
        console.log("Error al enviar datos");
        alert("Hubo un error al enviar datos");
    }
});