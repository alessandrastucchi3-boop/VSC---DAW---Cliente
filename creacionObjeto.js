class Persona {
    nombre;
    edad;
    profesion;

    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
}

const persona = new Persona("Ale", 30, "Vendedora");
console.log(persona.nombre);