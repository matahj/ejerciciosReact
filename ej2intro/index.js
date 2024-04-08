// console.log('Hola desde index.js');
// console.log(6 + 4);

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

const links = document.body.getElementsByTagName('a');
console.log(links);
console.log(links[0]);

const titulo1 = document.getElementById('titulo1');
console.log(titulo1);

const parrafos = document.getElementsByClassName('parrafos');
console.log(parrafos);
console.log(parrafos[0]);


// const handler = function(){
//     console.log('Alguien hizo click en la ventana');
// }

// window.addEventListener("click", handler);

const boton1 = document.getElementById('boton1');
//const boton2 = document.getElementById('boton2');
const boton2 = document.querySelector('#boton2');

const swapf = function () {
    document.body.insertBefore(parrafos[1], parrafos[0]);
}

boton1.addEventListener('click', swapf);

boton2.addEventListener('click', function () {
    parrafos[0].remove();
});

const boton3 = document.getElementById('boton3');

// const desactivarHandler = function(){
//     boton1.removeEventListener('click', swapf);
// }

//const desactivarHandler = () => boton1.removeEventListener('click', swapf);

boton3.addEventListener(
    'click',
    () => boton1.removeEventListener('click', swapf)
);

const nuevoH1 = document.createElement('h1');
const texto = document.createTextNode('Creado con JS');
nuevoH1.appendChild(texto);
document.body.appendChild(nuevoH1);

const crearElemento = (tipo, contenido) => {
    const elemento = document.createElement(tipo);
    const texto = document.createTextNode(contenido);
    elemento.appendChild(texto);
    return elemento;
}

const elem = crearElemento('p', 'Cualquier texto');
console.log(elem);

const cita = crearElemento('p', ' "Debugging is twice as hard as writing the code in the first place If you wirte the code as cleaverly as possible, you are, by definition, not smart enough to debug it."');
const autor = crearElemento('strong', ' Briann kernighan.');
cita.appendChild(autor);
document.body.appendChild(cita);    
