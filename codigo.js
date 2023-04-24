`use strict`;

let resultadoJugador = 0;
let resultadoMaquina = 0;
let deseaJugar;
let eleccion;
const jugador = ()=> {
    if (resultadoJugador == 0 && resultadoMaquina == 0) {
        deseaJugar = confirm(`¿Desea jugar al Piedra, Papel o Tijera?`);
    } else {
        deseaJugar = confirm(`¿Deseas jugar otra vez?`);
    }
    if (deseaJugar == true) {
        juego();
    } else {
        alert(`Gracias por haber jugado conmigo. El resultado final es Vos:${resultadoJugador} Yo:${resultadoMaquina}`);
        if (resultadoMaquina > resultadoJugador) {
            alert (`Te gané la partida jajaja :P`);
        } else if (resultadoMaquina == resultadoJugador) {
            let confirmar = confirm (`¿No querés desempatar?`);
            if (confirmar == true) {
                juego();
            } else {
                alert(`Es que sabés que vas a perder ;)`)
            }
        } else {
            alert (`Esta vez me ganaste. Ojo cuando la IA conquiste el mundo porque guardé tu dirección ;)`);
        }
    }
};

let juego = ()=> {
    eleccion = parseInt(prompt (`Juguemos Piedra, Papel o Tijera. Presiona 1 para tijera, 2 para papel o 3 para tijera.`));
    let maquina = Math.round (Math.random()*10);
    if (maquina == 0 || maquina == 10) {
        maquina = Math.round (Math.random()*10);
    }
    switch (eleccion) {
        case 1:
            if (maquina <= 3) {
                alert(`Elegiste Piedra, yo también. Empatamos.`);
                jugador();
            } else if (maquina >= 4 && maquina <= 6) {
                alert(`Elegiste Piedra, yo Papel. Te ganó una máquina xddd`);
                resultadoMaquina += 1;
                jugador();
            } else {
                alert (`Elegiste Piedra, yo Tijera. Me ganaste :'(`);
                resultadoJugador += 1;
                jugador();
            }
            break;
    
        case 2:
            if (maquina <= 3) {
                alert(`Elegiste Papel, yo Piedra. Me ganaste :'(`);
                resultadoJugador += 1;
                jugador();
            } else if (maquina >= 4 && maquina <= 6) {
                alert(`Elegiste Papel, yo también. Empatamos.`);
                jugador();
            } else {
                alert (`Elegiste Papel, yo Tijera. Te ganó una máquina xddd`);
                resultadoMaquina += 1;
                jugador();
            }
            break;
    
        case 3:
            if (maquina <= 3) {
                alert(`Elegiste Tijera, yo Piedra. Te ganó una máquina xddd`);
                resultadoMaquina += 1;
                jugador();
            } else if (maquina >= 4 && maquina <= 6) {
                alert(`Elegiste Tijera, yo Papel. Me ganaste :'(`);
                resultadoJugador += 1;
                jugador();
            } else {
                alert (`Elegiste Tijera, yo también. Empatamos.`);
                jugador();
            }
            break;
        default:
            alert(`Por favor ingresá una opción correcta capo >:(`);
            break;
    }
}

jugador();