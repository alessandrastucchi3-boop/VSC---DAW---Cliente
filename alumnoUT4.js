class Alumno {
    constructor (nombre, edad, nota) {
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
    }
}

let alumnos = [];
for(let i = 0; i < 3; i++) {
    let nombre = prompt("Como se llama el alumno? ");
    let edad = Number(prompt("Que edad tiene el alumno? "));
    let nota = Number(prompt("Que nota le han asignado? "));
    let alumno = new Alumno(nombre, edad, nota);
    alumnos.push(alumno);
}

let suma = 0;
alumnos.forEach(alumno => {
    suma = suma + alumno.nota;
})

let promedio = suma/alumnos.length;
console.log(`El promedio de notas es ${promedio}`);