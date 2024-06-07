let equipolocal=new Array(10);

equipolocal[0]= ["equipo1",30,10,10,0,0,26,2];
equipolocal[1]= ["equipo2",27,10,9,0,1,21,4];
equipolocal[2]= ["equipo3",25,10,8,1,1,18,5];
equipolocal[3]= ["equipo4",21,10,7,0,3,13,7];
equipolocal[4]= ["equipo5",20,10,6,2,2,12,6];
equipolocal[5]= ["equipo6",19,10,6,1,3,10,5];
equipolocal[6]= ["equipo7",18,10,6,0,4,9,8];
equipolocal[7]= ["equipo7",17,10,5,2,3,9,10];
equipolocal[8]= ["equipo8",16,10,5,1,4,8,12];
equipolocal[9]= ["equipo9",15,10,5,0,5,5,12];
equipolocal[10]= ["equipo10",14,10,4,2,4,6,16];

let campeon = equipolocal[0];
    
for(let equipo of equipolocal){
    console.log(equipo[0]+" Puntuación: "+equipo [1]+"Partidos jugados: "+equipo [2]+", Partidos ganados: "+equipo[3]+", Partidos empatados:"+equipo[4]+", Partidos perdidos: "+equipo[5]+" ,Goles a favor: "+equipo [6]+", Goles en contra: "+equipo[7] );
    
    if(equipo[1]>campeon[1]) campeon=equipo;
      console.log(`el equipo ganador es ${campeon[0]} con ${campeon[1]} puntos. Ha ganada ${campeon[3]} partidos.`)
    
}

