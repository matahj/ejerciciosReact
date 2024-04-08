const alumno = {
    nombre: 'Pedro',
    promedio: 8.7,
    direccion: {
        calle: 'Insurgentes',
        numero: 1234
    },
    ueasCursadas: ['uea1', 'uea2', 'uea3'], 

    suma: function(a,b){return a+b}
}

console.log(alumno.ueasCursadas);

const alumnoJSON = JSON.stringify(alumno);
console.log(alumnoJSON);

const alumno2JSON = '{"nombre":"Pedro","promedio":8.7,"direccion":{"calle":"Insurgentes","numero":1234},"ueasCursadas":["uea1","uea2","uea3"]}'

let alumno2 = JSON.parse(alumno2JSON);
console.log(alumno2);

const resultado = alumno.suma(5,5);
console.log(resultado);

