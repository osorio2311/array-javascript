let equipolocal = new Array(10);

equipolocal[0] = ["equipo1", 30, 10, 10, 0, 0, 26, 2];
equipolocal[1] = ["equipo2", 27, 10, 9, 0, 1, 21, 4];
equipolocal[2] = ["equipo3", 25, 10, 8, 1, 1, 18, 5];
equipolocal[3] = ["equipo4", 21, 10, 7, 0, 3, 13, 7];
equipolocal[4] = ["equipo5", 20, 10, 6, 2, 2, 12, 6];
equipolocal[5] = ["equipo6", 19, 10, 6, 1, 3, 10, 5];
equipolocal[6] = ["equipo7", 18, 10, 6, 0, 4, 9, 8];
equipolocal[7] = ["equipo7", 17, 10, 5, 2, 3, 9, 10];
equipolocal[8] = ["equipo8", 16, 10, 5, 1, 4, 8, 12];
equipolocal[9] = ["equipo9", 15, 10, 5, 0, 5, 5, 12];
equipolocal[10] = ["equipo10", 14, 10, 4, 2, 4, 6, 16];

// Convertir la estructura a objetos
let equipos = [];
for (let i = 0; i < equipolocal.length; i++) {
  equipos.push({
    nombre: equipolocal[i][0],
    puntos: equipolocal[i][1],
    partidosJugados: equipolocal[i][2],
    ganados: equipolocal[i][3],
    empatados: equipolocal[i][4],
    perdidos: equipolocal[i][5],
    golesAFavor: equipolocal[i][6],
    golesEnContra: equipolocal[i][7]
  });
}

// Ordenar equipos por puntos
for (let i = 0; i < equipos.length - 1; i++) {
  for (let j = 0; j < equipos.length - 1 - i; j++) {
    if (equipos[j].puntos < equipos[j + 1].puntos) {
      let temp = equipos[j];
      equipos[j] = equipos[j + 1];
      equipos[j + 1] = temp;
    }
  }
}

// Mostrar la tabla de clasificación en HTML
let tablaBody = document.querySelector("#tabla-clasificacion tbody");

equipos.forEach(equipo => {
  let fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${equipo.nombre}</td>
    <td>${equipo.puntos}</td>
    <td>${equipo.partidosJugados}</td>
    <td>${equipo.ganados}</td>
    <td>${equipo.empatados}</td>
    <td>${equipo.perdidos}</td>
    <td>${equipo.golesAFavor}</td>
    <td>${equipo.golesEnContra}</td>
  `;
  tablaBody.appendChild(fila);
});

// Mostrar información del equipo ganador antes de la tabla
let equipoGanador = equipos[0];
let divEquipoGanador = document.createElement("div");
divEquipoGanador.textContent = `El equipo ganador es: ${equipoGanador.nombre}`;
document.body.insertBefore(divEquipoGanador, document.getElementById("tabla-clasificacion"));




