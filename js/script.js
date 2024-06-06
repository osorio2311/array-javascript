//Variables--> nombre, utiliza un espacio de memoria para guardar un valor

let alumno1 = "Juan Perez";
let alumno2 = "Marina Torres";
//.... para estructura de datos -> se guardan en memoria como las variables 
// se utilizan ARRAYS

//Declaración de un Array
let alumnos = ["Juan Rodriguez",,"Marina Torres", "Dani Lopez", "Tania Pinero", "Sergio Castro"];

//añadir un elemento al array
alumnos[5]= "Arantxa Gonzalez"; 

console.log(alumnos[3]);//ves la posición 3
console.log(alumnos);//Salen todos los elementos del array

//reemplazar un valor de una posición específica, con invocarlo se puede cambiar.
alumnos[5]="Arantxa González García";
console.log(alumnos);


/**ACTIVIDAD RESULTA 3.1 */
//Crear un Array con 6 localidades y mostrar solo las de posiciones impares
let localidades = ["Alcázar de San Juan", "Argamasilla de Alba", "Mota del Cuervo", "Cinco Casas", "Quintanar de la Orden", "Tomelloso"];
let indice=0;
//para conocer en programación JS la longitud (número de elementos)de un array utilizamos el nombreArray.length.
while (indice<localidades.length){
    if(indice%2!=0){//si indice dividido entre dos el resto es distinto de 0, el índice es impar
        console.log(localidades[indice]);//se muestra la localidad 
    }
    indice++;
}

/**
 RECORRER TODO EL ARRAY LOCALIDADES, cuando se deje de cumplir saldrá del for
 */
for (let index = 0; index < localidades.length; index++) {
    console.log(`localidad ${index+1}->${localidades[index]}`);
}



//Crear un Array Bidimensionales ...valores randon del 1 al 10 (Notas);
//Crear 5 filas y 4 columnas
let arrayFC=new Array(5);// El 5 indica la longitud del array que estamos definiendo.
for (let i = 0; i < arrayFC.length; i++) {
    arrayFC[i]=new Array(4);//en este pungo se crean las columnas a la fila i
    for (let y = 0; y < arrayFC[i].length; y++){   //se recorren las columnas por esa fila
        arrayFC[i][y]=parseInt(Math.random()*10); //crear un valor aleatorio y asignarlo a la fila y columna
    }
}

console.log(arrayFC);

/*********************************************************************************************************************************** */


/**
 Crea un cuadro (div) y un despegable indicando los colores, y según selecciones... va al array con el índice y cambia el color...
 */

 let coloresRGB = ["#f39c12","#C0F312","#12F3E5","#F312AF","#F31212"];
 let nombreRGB = ["Naranja","Lima","Turquesa","Rosa","Rojo"];
let color= ["#8000FF"];
let colores=document.querySelector("#colores"); //cogemos el id del html
for (let i = 0; i < nombreRGB.length; i++) {
    let opcion=document.createElement("option");//creamos el option del select que tenemos en el HTML
    //le indicas con textContent que muestra en el select por cada opción
    opcion.textContent=nombreRGB[i];
    //Se le agrega atributos
    opcion.setAttribute("value",i);
    colores.appendChild(opcion);
}
let contenedor=document.querySelector(".container");
//escuchamos el evento de cambio dentro del select para que cambie el color
colores.addEventListener("change",function(){
    contenedor.style.backgroundImage="none";
    contenedor.style.backgroundColor=coloresRGB[colores.value];
    contenedor.style.border="1px solid #fff";
    contenedor.style.borderRadius="35px";
//si se selecciona el option de value=""...dale color y forma
if (colores.value==""){
    contenedor.style.backgroundImage="url(../img/picachu.png";
}
})

/********************************************************************************* */




