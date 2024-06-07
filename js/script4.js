// //para insertar al final del array un elemento

// //push-> nombreArray.push(elementoNuevo)
// let equipos=["R.Madrid","Girona","Barcelona","Atlético","Villareal","Athletic","Real Sociedad","Betis","Sevilla","Celta"];
// equipos.push("Tomelloso");
// console.log(equipos);

//  //insertar al principio....
//  equipos.unshift("Alcazar de San Juan");
//  console.log(equipos);

//  //Crear multiplos de 5 del 0 al 100
//  for (let index =0; index<15;index++){
//  let num =parseInt(Math.random()*21)*5;
//  console.log(numero);
// }


let datos = new Array(10);

for (let i = 0; i < 10; i++) {
    datos[i] = Math.floor(Math.random() * 20 + 1) * 5;
  }
original = datos.slice();
console.log(original);


if(datos[0]<50){
    datos.shift();
    let num;
    do {
      num = Math.floor(Math.random() * 20 + 1) * 5;
    } while (num <= 50);//cuando esto no se cumple se sale
    datos.unshift(num);
    console.log("cambio el primero:",datos)
}

if(datos[0]>50){
    datos.pop();
    let numero;
    do {
      numero = Math.floor(Math.random() * 20 + 1) * 5;
    } while (numero >= 50);//cuando esto no se cumple se sale
    datos.push(numero);
    console.log("cambio el ultimo",datos)
}





























