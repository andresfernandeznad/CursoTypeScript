function holaMundo (nombre) {
	return "Hola Mundo! Soy " + nombre;
}

var nombre = "Andrés Fernández ";

var etiqueta = <HTMLElement>document.getElementById("container");	
etiqueta.innerHTML = holaMundo(nombre); 
alert("HOLA");

//Metemos dentro de la etiqueta container lo que hemos conseguido en esta función
//Y lo escribimos gracias al innerHTML
//Para compilar escribimos en la consola tsc nombrearchivo.ts o tsc -w nombrearchivo para compilar constantemente

//Variables y tipos

//Tipado fuerte

var nombre:string = "Andrés Fernández Nadales";
var edad:number = 20;
var programador:boolean = true;

//Para poner variables  de cualquier tipo ponemos que es de tipo any
var cualquiera:any = "Hola";

cualquiera = 12;

edad = 19;

//array

var lenguajes: Array<string> = ["PHP", "JavaScript", "CSS"];

etiqueta.innerHTML = nombre + " - " + edad;

//Diferencias entre let y var
var a = 7;
var b = 12;

if(a === 7) {
	let a = 4;
	var b = 15;
	console.log("DENTRO DEL IF " + a + ", " + b);
}

console.log("FUERA DEL IF " + a + ", " + b);

//Funciones y tipado

function devuelveNumero(num:number):string{
	return num + " devuelve este número.";
}

function devuelveString (texto:string):number{
	if (texto == "hola") {
		var num = 66;
	} else {
		var num = 90;
	}
	return num;
}

alert(devuelveNumero(20));

//Programación orientada a objetos

