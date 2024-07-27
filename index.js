import { cambiarColor, cambiarColorModalCopiar, cambiarColorModalValidacion, cambiarColorSvgIntercambio } from "./cambioColor.js"

let $textoUsuario = document.querySelector(".contenido_encriptador_texto");
let $textoEncriptado = document.querySelector(".contenido_encriptado_texto");
let $textoEncriptadoAdvertencia = document.querySelector(".contenido_encriptado_advertencia");
let $btnDesencriptar = document.querySelector(".contenido_encriptador_botones_desencriptar");
let $btnEncriptar = document.querySelector(".contenido_encriptador_botones_encriptar");
let $btnCopiar = document.querySelector(".contenido_encriptado_copiar");
let $btnIntercambiar = document.querySelector(".contenido_intercambio");
let $dialog = document.querySelector(".contenido_dialogo");

let $botonAzul = document.querySelector(".contenido_color_azul");
let $botonRojo = document.querySelector(".contenido_color_rojo");
let $botonVerde = document.querySelector(".contenido_color_verde");

let puedoIntercambiar = false;
let colorActual = "blue";


let templateValidacion =  cambiarColorModalValidacion(colorActual);
let templateCopiar = cambiarColorModalCopiar(colorActual);


$textoUsuario.addEventListener("input", () => {
    puedoIntercambiar = false;
    cambiarColorSvgIntercambio(colorActual, true);
    controlListenerIntercambio();
})



$btnCopiar.addEventListener("click", () => {
    if ($textoEncriptado.textContent.length < 1) {
        $dialog.innerHTML = templateCopiar;
        $dialog.showModal();
        return
    }
    navigator.clipboard.writeText($textoEncriptado.textContent);
    $btnCopiar.textContent = "Texto Copiado!";

    setTimeout(() => {
        $btnCopiar.textContent = "Copiar";
    }, 1000);
});

$btnEncriptar.addEventListener("click", () => {
    if (validarTexto($textoUsuario.value)) {
        $textoEncriptado.textContent = encriptar($textoUsuario.value);
        puedoIntercambiar = true;
        cambiarColorSvgIntercambio(colorActual, false);
        $textoEncriptadoAdvertencia.style.display = "none";
        controlListenerIntercambio();
        return;
    }

    $dialog.innerHTML = templateValidacion;
    $dialog.showModal();
});

$btnDesencriptar.addEventListener("click", () => {
    if (validarTexto($textoUsuario.value)) {
        $textoEncriptado.textContent = desencriptar($textoUsuario.value);
        puedoIntercambiar = true;
        cambiarColorSvgIntercambio(colorActual, false);;
        $textoEncriptadoAdvertencia.style.display = "none";
        controlListenerIntercambio();
        return;
    }

    $dialog.innerHTML = templateValidacion;
    $dialog.showModal();
});

$botonAzul.addEventListener("click", () => {
    colorActual = "blue";
    cambiarColor(colorActual);
    templateCopiar = cambiarColorModalCopiar(colorActual);
    templateValidacion = cambiarColorModalValidacion(colorActual);
    let $activoActual = document.querySelector(".color_activo");
    $activoActual.classList.remove("color_activo");
    $botonAzul.classList.add("color_activo");
});

$botonRojo.addEventListener("click", () => {
    colorActual = "red";
    cambiarColor(colorActual);
    templateCopiar = cambiarColorModalCopiar(colorActual);
    templateValidacion = cambiarColorModalValidacion(colorActual);
    let $activoActual = document.querySelector(".color_activo");
    $activoActual.classList.remove("color_activo");
    $botonRojo.classList.add("color_activo");
});

$botonVerde.addEventListener("click", () => {
    colorActual = "green";
    cambiarColor(colorActual);
    templateCopiar = cambiarColorModalCopiar(colorActual);
    templateValidacion = cambiarColorModalValidacion(colorActual);
    let $activoActual = document.querySelector(".color_activo");
    $activoActual.classList.remove("color_activo");
    $botonVerde.classList.add("color_activo");
});


function encriptar(texto) {
    let textoEncriptado;

    textoEncriptado = texto.replace(/e/, "enter");
    textoEncriptado = textoEncriptado.replace(/i/, "imes");
    textoEncriptado = textoEncriptado.replace(/a/, "ai");
    textoEncriptado = textoEncriptado.replace(/o/, "ober");
    textoEncriptado = textoEncriptado.replace(/u/, "ufat");

    return textoEncriptado;
}

function desencriptar(texto) {
    let textoDesencriptado;

    textoDesencriptado = texto.replace(/enter/, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/, "u");

    return textoDesencriptado;
}

function validarTexto(texto) {
    let textoValidacion = texto.trim().replace(/\s+/g, '');

    if (textoValidacion.length < 1) {
        return false;
    }

    if (textoValidacion.match(/[!A-Z]/)) {
        return false;
    }

    if (textoValidacion.match(/\W/)) {
        return false;
    }

    if (textoValidacion.match(/\d/)) {
        return false;
    }

    return true;
}

function controlListenerIntercambio() {
    if (puedoIntercambiar) {
        $btnIntercambiar.addEventListener("click", intercambiarTexto, true);
        return;
    }

    $btnIntercambiar.removeEventListener("click", intercambiarTexto, true);
}

function intercambiarTexto() {
    let textoTemporal = $textoUsuario.value;
    $textoUsuario.value = $textoEncriptado.textContent;
    $textoEncriptado.textContent = textoTemporal;
}
