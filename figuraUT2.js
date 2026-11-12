class Figura {
    area() {
        console.log("El area es: ");
    }
}

class Rectangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    area() {
        console.log(`El area es: ${this.base*this.altura}`);
    }
}

class Circulo extends Figura {
    constructor(radio) {
        super();        
        this.radio = radio;
    }
    area() {
        const pi = 3.14;
        console.log(`El area es: ${this.radio**2*pi}`);
    }
}

class Cuadrado extends Figura {
    constructor(lado) {
        super();        
        this.lado = lado;
    }
    area() {
        console.log(`El area es: ${this.lado**2}`);
    }
}

let figuras = [];

const rectangulo = new Rectangulo(2,6);
const circulo = new Circulo(6);
const cuadrado = new Cuadrado(9);

figuras.push(rectangulo, circulo, cuadrado);

figuras.forEach(figura => {
    figura.area()
});