var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.color = "blanco";
        if (modelo == null) {
            this.modelo = "BMW genérico";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
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
