//alert("No se aceptaran mayusculas ni caracteres especiales");
let texto= document.getElementById('textoIngresado');
let campo= document.getElementById('campoDelMensaje');
let caracteresEspeciales=  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
//Primero creamos una matriz, la cual nos ayuda a posicionar nuestro indice en cada posición que deseee ser intercambiada

let matriz = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];


//Creamos una función la cual nos ayudo a darle una "vida" a nuestro botón de Encriptar
function btnencriptar() {
    let guardarMensaje= encriptar(texto.value/*El value lo utilizamos con el fin de poder retornar el valor de la etiqueta*/);
    campo.value =guardarMensaje; /*Se llama la función  cuando clickee en btencriptar*/
    texto.value="";
    campo.style.backgroundImage ="none";
    return;
}

function btndesencriptar() {
    let guardarMensaje= desencriptar(texto.value);
    campo.value=guardarMensaje;
    texto.value="";
    campo.style.backgroundImage ="none";
    
    return;
}

//Luego creamos la función encriptar, la cual llevaba un parametro que es fraseEncriptada que nos permite crear un ciclo for donde se declara primero una variable llamada "i" y que dice si el "i" es < a nuestro tamaño de nuestro array entonces se va a sumar a si mismo utilizamos 
function encriptar(fraseEncriptada) {
    fraseEncriptada = fraseEncriptada.toLowerCase();/*Conviere todo el texto a minúsculas para no tener problemas con las mayusculas*/
    if (caracteresEspeciales.test(fraseEncriptada)) {
        alert ("Carácteres no permitidos");
        return;
    }    
    for (let i = 0 /*Se declara una variable*/; i < matriz.length /*Se le dice que si i es < al tamaño de mi array (matriz) entonces --> se va a sumar a si mismo con el fin de que avance tanto de posición*/; i++) {
            if (fraseEncriptada.includes(matriz[i][0])) {
                fraseEncriptada = fraseEncriptada.replaceAll (
                    matriz[i][0],
                    matriz[i][1]
                )
            }
        }
    return  fraseEncriptada;
}

function desencriptar(fraseDesencriptar) {
    fraseDesencriptar=fraseDesencriptar.toLowerCase();
    if (caracteresEspeciales.test(fraseDesencriptar)) {
        alert ("Carácteres no permitidos");
        return;
    }    
    for (let i = matriz.length -1; i >= 0; i--) {
        if (fraseDesencriptar.includes(matriz[i][1])) {
            fraseDesencriptar = fraseDesencriptar.replaceAll(
                matriz[i][1],
                matriz[i][0]
            )
        }
    }
    return fraseDesencriptar;
}

function copiarTexto(copiar){
    campo.select();
    document.execCommand("copy");
    return copiar;
}