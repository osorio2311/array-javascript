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

/****************************************************** */
let arrayMascotas=["perro","gato","tortuga"];
//recorrer el array mascotas con el for of
for (let mascota of arrayMascotas) {
    console.log(mascota);
}


/****************************************************** */

let matriz=[[5,58,9],[7,8,4],[1,5,45],[2,4,6,54]];
console.log(matriz.length);//nos trae las filas
//recorrer el array bidimensional de otra manera
for (let f=0; f<matriz.length; f++) {//lo recorre 4 veces
    for (let c=0; c<matriz.length[f]; c++){
        console.log(`Valor de la fila ${f} y columna ${c} es ${matriz[f][c]}`);
    }
}

/****************************************************** */

/**
 ACTIVIDAD RESUELTA 3.2
 Crear un Array 3x3, asignarle valores y mostrar la diagonal principal
 */
let arrayD=new Array(3);
    for(let f=0; f<arrayD.length; f++){
        arrayD[f]=new Array(3);
        for(let c=0; c<arrayD[f].length; c++){
            arrayD[f][c]=Math.floor(Math.random()*100+1);
            document.getElementById("d"+f+c).innerHTML=arrayD[f][c];
            if (f==c){
                document.getElementById("d"+f+c).style.color="red";
            }
        }
    }

    console.log(arrayD);

//Generar y llenar la diagonal principal con números aleatorios
for (let i = 0; i < 3; i++) {
    const cellId = `d${i}${i}`;
    document.getElementById(cellId).innerText = Math.floor(Math.random() * 100);
}
