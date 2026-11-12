let numeros = [];
for(let i = 0; i < 5; i++) {
    let numero = Number(prompt("Añade un número: "));
    numeros.push(numero);
}

//Funcion suma
function sumar(arr) {
    let suma = 0;
    arr.forEach(num => {
    suma = suma + num;
    })
    return suma;
};

//Funcion maximo
function maximo(arr) {
    let maximo = arr[0];
    arr.forEach(num => {
        if(num > maximo) {
            maximo = num;
        }
    });
    return maximo;
}

//Funcion minimo
function minimo(arr) {
    let minimo = arr[0];
    arr.forEach(num => {
        if(num < minimo) {
            minimo = num;
        }
    });
    return minimo;
}

//Funcion promedio
function promedio(arr) {
    let promedio = sumar(arr)/arr.length;
    return promedio;
}

//resultados
console.log(`La suma es ${sumar(numeros)}`);
console.log(`El maximo es ${maximo(numeros)}`);
console.log(`El minimo es ${minimo(numeros)}`);
console.log(`El promedio es ${promedio(numeros)}`);