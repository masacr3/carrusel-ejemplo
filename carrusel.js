class Carrusel{
    constructor(){
        this.lista = [];
        this.actual = 0;
        this.cant = 0;
    }

    //agrega un nodo al carrusel
    agregar( dato ){
        this.lista.push( dato );
        this.cant += 1;
    }

    //muestra el nodo actual
    mostrar_actual(){
        let actual = this.lista[this.actual];
        const nodo = document.querySelector(actual);
        nodo.classList.add('activar');
    }

    //mueve el carrusel a la derecha 
    //si esta en la ultima posicion vuelve a la primera
    mover_derecha(){
        let actual = this.lista[this.actual];
        const nodo = document.querySelector(actual);
        nodo.classList.remove('activar');
        this.actual = (this.actual + 1) == this.cant ? 0 : this.actual + 1;
    }

    //mueve el carrusel a la izquierda
    //si esta en la primera posicion lo manda a la ultima  
    mover_izquierda(){
        let actual = this.lista[this.actual];
        const nodo = document.querySelector(actual);
        nodo.classList.remove('activar');
        this.actual = (this.actual - 1) < 0 ? this.cant - 1 : this.actual - 1;
    }
}

let carrusel = new Carrusel();

//aca podes agregar la cantidad de datos q quieras
carrusel.agregar('.a');
carrusel.agregar('.b');
carrusel.agregar('.c');

carrusel.mostrar_actual();

const btonizq = document.querySelector('.izq');
const btonder = document.querySelector('.der');

btonizq.addEventListener('click',()=>{
    carrusel.mover_izquierda();
    carrusel.mostrar_actual();
});

btonder.addEventListener('click',()=>{
    carrusel.mover_derecha();
    carrusel.mostrar_actual();
})