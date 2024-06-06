/**
 Actividad propuesta 3.3

 Crear un array con 100 valores aleatorios y mostrar solo los pares.
 Utilizar el recorrido con for-in
 */
let array=new Array(100);
//Para crear el array utilizamos el for-in
for (let i = 0; i < array.length; i++) {
    array[i]=parseInt(Math.random()*1000+1);
    
}
//para mostrar el array y valorar si es par, utilizamos el for-in
for (let indice in array){//recorre el array con otro bucle for tomando en cuenta el índice
    if(array[indice]%2==0){
        console.log(`número par en el índice ${indice} con valor ${array[indice]}`);
    }
}

//
let arrayMascotas=["perro","gato","tortuga"];
//recorrer el array mascotas con el for of
for (let mascota of arrayMascotas) {
    console.log(mascota);
}
