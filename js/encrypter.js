// Definidos los diccionarios de encriptación y de volcales acentuadas como objetos
let dict = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" };
let special = { "á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u", "ü": "u" }
let textIn;
let textOut;

document.getElementById("finaloutput").style.display = "none"; // Oculta el cuadro del output

// Función para remplazar cadenas al encriptar o desencriptar
function allReplace(str, obj) {
    for (const w in obj) {
        str = str.replace(new RegExp(obj[w], 'g'), w);
    }
    return str;
};

// Función para el output
function Output() {
    document.getElementById("textOut").value = textOut; // Envío del texto cifrado al campo de salida
    document.getElementById("textIn").value = ""; // Limpieza del input
    document.getElementById("initoutput").style.display = "none"; // Muestra el cuadro con el output
    document.getElementById("finaloutput").style.display = "initial"; // Muestra el cuadro con el output
    if (textIn === "") {
        document.getElementById("initoutput").style.display = "initial"; // Muestra el cuadro con el output
        document.getElementById("finaloutput").style.display = "none"; // Oculta el cuadro con el oputput cuando no hay entrada
    }
}

// Función para encriptar
function encrypt() {
    textIn = document.getElementById("textIn").value.toLowerCase(); // Lectura del texto introducido en minúsculas
    textIn = textIn.replace(/[áéíóúü]/g, l => special[l]); // Remplazo de las vocales acentuadas según el objeto special
    textOut = textIn.replace(/[aeiou]/g, l => dict[l]); // Remplazo de las vocales según el diccionario
    Output();
};

let buttonEncrypt = document.getElementById("encrypt"); // Lectura del estado del botón para encriptar
buttonEncrypt.onclick = encrypt; // Llamada de la función encrypt en el click

// Función para desencriptar
function decrypt() {
    textIn = document.getElementById("textIn").value.toLowerCase(); // Lectura del texto intorducido en minúsculas
    textIn = textIn.replace(/[áéíóúü]/g, l => special[l]); // Remplazo de las vocales acentuadas según el objeto special
    textOut = allReplace(textIn, dict); // Llmado de la función que remplaza las palabars por las vocales según el diccionario 
    Output();
};

let buttonDecrypt = document.getElementById("decrypt"); // Lectura del estado del botón para desencriptar
buttonDecrypt.onclick = decrypt; // Llamada de la función decrypt en el click

// Función para copiar texto
function copyText() {

    var text = document.getElementById('textOut').value; // Lectura del texto en el output
    navigator.clipboard.writeText(text); // Copia del texto al portapapeles
}

let buttonCopy = document.getElementById("copytext"); // Lectura del estado del botón para copiar
buttonCopy.onclick = copyText; // Llamada de la función para copiar el texto en el output con el click