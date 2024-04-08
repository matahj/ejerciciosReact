const alumnoPedro = {
    nombre: 'Pedro',
    matricula: '123456',
    calificaciones: [10, 9.5, 7.3, 9.5, 9.7],
    getPromedio: function () {
        promedio = 0;
        for (let i = 0; i < this.calificaciones.length; i++) {
            promedio += this.calificaciones[i] / this.calificaciones.length;
        }
        return promedio;
    }
}

console.log(alumnoPedro.nombre);
console.log(alumnoPedro.getPromedio());

console.log(`Nombre: ${alumnoPedro.nombre}`);
console.log(`Promedio: ${alumnoPedro.getPromedio()}`);
/////////////////////////////////////////////////////////

const Alumno = function (nombre, matricula, calificaciones) {
    this.nombre = nombre;
    this.matricula = matricula;
    this.calificaciones = calificaciones;
    this.getPromedio = () => {
        promedio = 0;
        for (let i = 0; i < this.calificaciones.length; i++) {
            promedio += this.calificaciones[i] / this.calificaciones.length;
        }
        return promedio;
    }
}

const a1 = new Alumno('Pedro', '123456', [10, 9.5, 7.3, 9.5, 9.7]);
const a2 = new Alumno('Ana', '4567345', [10, 10, 10, 9.5, 10, 10]);

console.log(`El promedio de ${a1.nombre} es ${a1.getPromedio()}`);
console.log(`El promedio de ${a2.nombre} es ${a2.getPromedio()}`);

//////////////////////////////////////////////////////7

class Persona {
    constructor(nombre, fechaNacimiento, trabajo){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.trabajo = trabajo;
    }

    calcularEdad(){
        const hoy = new Date();
        const anyo = hoy.getFullYear();
        return(anyo-this.fechaNacimiento);
    }
}

const p1 = new Persona('Sandra', 2000, 'Programadora');
console.log(`${p1.nombre} tien ${p1.calcularEdad()} años y es ${p1.trabajo}`);



