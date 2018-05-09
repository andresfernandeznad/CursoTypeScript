interface CocheBase{
	getModelo():string;
	getVelocidad():number
}

class Coche implements CocheBase {
	private color:string;
	private modelo:string;
	private velocidad:number;

	constructor(modelo = null) {
		this.velocidad = 0;
		this.color = "blanco";
		if(modelo == null) {
			this.modelo = "BMW genérico";
		} else {
			this.modelo = modelo;
		}
	}

	public getColor() {
		return this.color;
	}

	public getModelo():string {
		return this.modelo;
	}
	public setModelo(modelo:string) {
		this.modelo = modelo;
	}

	public getVelocidad():number {
		return this.velocidad;
	}

	public setColor(color:string) {
		this.color = color;
	}

	public acelerar(){
		this.velocidad++;
	}

	public frenar(){
		this.velocidad--;
	}

}

var coche = new Coche();
var coche2 = new Coche("Audi R8");
var coche3 = new Coche();

coche.setColor("verde");
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche2.setColor("rojo");
coche3.setColor("azul");


console.log(coche.getModelo());
console.log(coche2.getModelo());
console.log(coche.getColor());
console.log(coche2.getColor());
console.log(coche3.getColor());
console.log(coche.getVelocidad());
coche.frenar();
console.log(coche.getVelocidad());