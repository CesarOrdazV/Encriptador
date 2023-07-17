// Definidos los diccionarios de encriptación y de volcales acentuadas como objetos
let dict = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" };
let special = { "á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u", "ü": "u" }
let input;
let output;

document.getElementById("output-response").style.display = "none"; // Oculta el cuadro del output

// Función para remplazar cadenas al encriptar o desencriptar
function allReplace(str, obj) {
    for (const w in obj) {
        str = str.replace(new RegExp(obj[w], 'g'), w);
    }
    return str;
};

// Función para el output
function Output() {
    document.getElementById("output").value = output; // Envío del texto cifrado al campo de salida
    document.getElementById("output-init").style.display = "none"; // Muestra el cuadro con el output
    document.getElementById("output-response").style.display = "flex"; // Muestra el cuadro con el output
    if (input === "") {
        document.getElementById("output-init").style.display = "flex"; // Muestra el cuadro con el output
        document.getElementById("output-response").style.display = "none"; // Oculta el cuadro con el oputput cuando no hay entrada
    }
}

// Función para encriptar
function encrypt() {
    input = document.getElementById("input").value.toLowerCase(); // Lectura del texto introducido en minúsculas
    input = input.replace(/[áéíóúü]/g, l => special[l]); // Remplazo de las vocales acentuadas según el objeto special
    output = input.replace(/[aeiou]/g, l => dict[l]); // Remplazo de las vocales según el diccionario
    Output();
};

let buttonEncrypt = document.getElementById("encrypt-button"); // Lectura del estado del botón para encriptar
buttonEncrypt.onclick = encrypt; // Llamada de la función encrypt en el click

// Función para desencriptar
function decrypt() {
    input = document.getElementById("input").value.toLowerCase(); // Lectura del texto intorducido en minúsculas
    input = input.replace(/[áéíóúü]/g, l => special[l]); // Remplazo de las vocales acentuadas según el objeto special
    output = allReplace(input, dict); // Llmado de la función que remplaza las palabars por las vocales según el diccionario 
    Output();
};

let buttonDecrypt = document.getElementById("decrypt-button"); // Lectura del estado del botón para desencriptar
buttonDecrypt.onclick = decrypt; // Llamada de la función decrypt en el click

// Función para copiar texto
function copyText() {
    let text = document.getElementById('output').value; // Lectura del texto en el output
    navigator.clipboard.writeText(text); // Copia del texto al portapapeles
    document.getElementById("input").value = ""; // Limpieza del input
}

let buttonCopy = document.getElementById("copy"); // Lectura del estado del botón para copiar
buttonCopy.onclick = copyText; // Llamada de la función para copiar el texto en el output con el click

