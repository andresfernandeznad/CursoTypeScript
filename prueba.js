function holaMundo(nombre) {
    return "Hola Mundo! Soy " + nombre;
}
var nombre = "Andrés Fernández ";
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = holaMundo(nombre);
alert("HOLA");
//Metemos dentro de la etiqueta container lo que hemos conseguido en esta función
//Y lo escribimos gracias al innerHTML
//Para compilar escribimos en la consola tsc nombrearchivo.ts o tsc -w nombrearchivo para compilar constantemente
//Variables y tipos
//Tipado fuerte
var nombre = "Andrés Fernández Nadales";
var edad = 20;
var programador = true;
//Para poner variables  de cualquier tipo ponemos que es de tipo any
var cualquiera = "Hola";
cualquiera = 12;
edad = 19;
//array
var lenguajes = ["PHP", "JavaScript", "CSS"];
etiqueta.innerHTML = nombre + " - " + edad;
//Diferencias entre let y var
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4;
    var b = 15;
    console.log("DENTRO DEL IF " + a_1 + ", " + b);
}
console.log("FUERA DEL IF " + a + ", " + b);
//Funciones y tipado
function devuelveNumero(num) {
    return num + " devuelve este número.";
}
function devuelveString(texto) {
    if (texto == "hola") {
        var num = 66;
    }
    else {
        var num = 90;
    }
    return num;
}
alert(devuelveNumero(20));
//Programación orientada a objetos
