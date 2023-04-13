// Definidos los diccionarios de encriptación y de volcales acentuadas como objetos
let dict = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" };
let special = { "á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u", "ü": "u" }
let textIn;

// Función para remplazar cadenas al encriptar o desencriptar
function allReplace(str, obj) {
    for (const w in obj) {
        str = str.replace(new RegExp(obj[w], 'g'), w);
    }
    return str;
};

// Función para encriptar
function encrypt() {
    let textOut;

    textIn = document.getElementById("textIn").value; // Lectura del texto introducido
    textIn = textIn.toLowerCase(); // Asegura minúsculas
    textIn = textIn.replace(/[áéíóúü]/g, l => special[l]); // Remplazo de las vocales acentuadas según el objeto special
    textOut = textIn.replace(/[aeiou]/g, l => dict[l]); // Remplazo de las vocales según el diccionario
    document.getElementById("textOut").value = textOut; // Envío del texto cifrado al campo de salida
    document.getElementById("textIn").value = ""; // Limpieza del input
};

let buttonEncrypt = document.getElementById("encrypt"); // Lectura del estado del botón para encriptar
buttonEncrypt.onclick = encrypt; // Llamada de la función encriptar en el click

// Función para desencriptar
function decrypt() {
    let textOut;

    textIn = document.getElementById("textIn").value.toLowerCase(); // Lectura del texto intorducido
    textIn = textIn.toLowerCase(); // Asegura minúsculas
    textIn = textIn.replace(/[áéíóúü]/g, l => special[l]); // Remplazo de las vocales acentuadas según el objeto special
    textOut = allReplace(textIn, dict); // Llmado de la función que remplaza las palabars por las vocales según el diccionario 
    document.getElementById("textOut").value = textOut; // Envío del texto descifrado al campo de salida
    document.getElementById("textIn").value = ""; // Limpieza del input
};

let buttonDecrypt = document.getElementById("decrypt"); // Lectura del estado del botón para desencriptar
buttonDecrypt.onclick = decrypt; // Llamada de la función desencriptar en el click