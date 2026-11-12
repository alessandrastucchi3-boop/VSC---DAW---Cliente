class Vehiculo {
    #marca;
    #velocidad;
    constructor(marca, velocidad) {
        this.#marca = marca;
        this.#velocidad = velocidad;
    }
    setMarca (nuevaMarca) {
        this.#marca = nuevaMarca;   
    }
    setVelocidad (nuevaVelocidad) {
        if(nuevaVelocidad >= 0) {
            this.#velocidad = nuevaVelocidad;
        } else {
            console.log("La velocidad no puede ser negativa");
        }
    }
    getMarca () {
        return this.#marca;
    }
    getVelocidad () {
        return this.#velocidad;
    }
    
}

class Coche extends Vehiculo {
    #numPuertas;
    constructor(marca, velocidad, numPuertas) {
        super(marca, velocidad);
        this.#numPuertas = numPuertas;
    }
    getNumPuertas () {
        return this.#numPuertas;
    }
}

let coche = new Coche("Maserati", 100, 5);

console.log(`La marca del coche es ${coche.getMarca()}.`);
console.log(`La velocidad del coche es ${coche.getVelocidad()}.`);
console.log(`El coche dispone de ${coche.getNumPuertas()} puertas.`);