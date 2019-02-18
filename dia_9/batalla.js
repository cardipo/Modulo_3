// Batalla estelar

// Se quiere emular una batalla entre dos ejercitos de naves espaciales. El pierde la partida quien pierde todas sus naves.

// Cada ejercito podrá seleccionar una nave propia. La nave seleccionará un objetivo rival y disparará. 
// La nave 'objetivo' perderá puntos de daño dependiendo de la potencia del  disparo.

// Objetos a crear:
// Una clase Nave
//     Propiedades
//         Daño
//         Puntos de vida (Escudo)
//         Nombre o Código
//         Estado (Activo o Destruido) (Solo lectura)
//     Metodos
//         Disparar
//             Selecciona un objetivo
//             Lo llama y le ejecuta recibir un disparo
//         Seleccionar Objetivo
//         Recibir disparo (dano)
//             Se descuenta el daño a los puntos de vida
// Tres clases derivadas de Nave: Nave Clase I, Nave Clase II, Nave Clase III
//     Cada una tendrá caracteristicas distintas (10 disparo, 5 vida) (5 disparo, 10 vida) (8 disparo, 7 vida)  (Opcional)
// Una clase ejercito
//     Nombre
//     ListaNaves
//     Estado o    Informe de las naves
//     Derrotado (s/N)
// Una clase Generador de Naves
//     Metodos
//         CrearEjercito(nombre, cantidad clase I, cantidad clase II, cantidad clase III)
//             El total de 
//         Distribuir el ejercito en el campo de batalla
        
// Una clase Campo de Batalla
//     Lista de sectores por ejercito (uno para cada ejercito)
//     Control de los turnos (clase principal para el juego)
//     Ejecutar turno(ejercito)
//         Seleecionar una nave que dispara
        
        
    
// Una clase sector:
//     Un array donde se almacenan las naves. Puede ser mismo tamaño que el ejercito (n elementos) 
//     o tener más tamaño y quedar huecos (disparo al aire), opcional 2 y tres dimensiones.
    
//     Metodos:
//         ObtenerElementoEnPosicion(posicion) (devuelve una nave o null)
    
    
// Ejemplo de funcionamiento:

// const ejercito1 = generador.CrearEjercito("Rojo",3,5,7);
// const ejercito2 = generador.CrearEjercito("Verde",3,5,7);
// //(si son distintos se generan partidas desiguales, asi que habrá que controlar esto al añadir los ejercitos)
// const campoBatalla = generador.GenerarCampo(ejercito1,ejercito2);

// var resultado =campoBatalla.REalizarPartida();
// // Dentro se realizarán los turnos
// // Se visualizaran los disparos
// // Se indica si una nave ha sido destruida: la nave 1 del ejercito rojo ha sido destruida por la nave 3 del ejercito verde
// console.log(resultado);
// // El ejercito rojo ha ganado

class Nave {
  constructor(dano, puntosVida, codigo) {
    this.dano = dano;
    this.puntosVida = puntosVida;
    this.codigo = codigo;
  }
  get Estado() {
    if (this.puntosVida <= 0) return "destruido";
    else return "activo";
  }
 
  RecibirDisparo(dano) {
    this.puntosVida -= dano;
    return this.puntosVida;
  }
 }
 
 class Nave1 extends Nave {
  constructor() {
    super(5, 10, "Nave1");
  }
 }
 
 class Nave2 extends Nave {
  constructor() {
    super(10, 5, "Nave1");
  }
 }
 
 class Nave3 extends Nave {
  constructor() {
    super(7, 8, "Nave3");
  }
 }
 
 class Ejercito {
  constructor(nombre, listaNaves) {
    this.nombre = nombre;
    this.listaNaves = listaNaves;
  }
  CrearInforme() {}
  get Derrotado() {
    let isDerrotado = true;
    for (let value of this.listaNaves) {
      if (value.Estado == "activo") isDerrotado = false;
    }
    if (isDerrotado) return "derrotado";
    else return "en combate";
  }
 }
 
 class GeneradorNaves {
  constructor() {}
 
  crearEjercito(nombre, cantClase1, cantClase2, cantClase3) {
    let listaNaves = [];
    for (let i = 1; i <= cantClase1; i++) {
      listaNaves.push(new Nave1());
    }
    for (let i = 1; i <= cantClase2; i++) {
      listaNaves.push(new Nave2());
    }
    for (let i = 1; i <= cantClase3; i++) {
      listaNaves.push(new Nave3());
    }
    let nuevoEjercito = new Ejercito(nombre, listaNaves);
    return nuevoEjercito;
  }
 
  distribuirEjercito(campoBatalla, ejercito) {
    campoBatalla.estableceEjercitos(ejercito);
  }
 }
 
 class CampoBatalla {
  constructor() {
    this.sectores = [];
    this.ejercitos = [];
  }
  estableceEjercitos(ejercito) {
    this.ejercitos.push(ejercito);
    this.sectores.push(ejercito.listaNaves);
  }
 
  seleccionarObjetivo(posicion) {
 
  }
 
  disparar() {
 
  }
 
 }
 
 class Sector {
  constructor() {
    this.espacios = [];
  }
  ObtenerElemPos(posicion) {
    return this.espacios[posicion];
  }
 }
 let generador = new GeneradorNaves();
 let ejercito1 = generador.crearEjercito("verde", 2, 4, 6);
 let ejercito2 = generador.crearEjercito("rojo", 4, 2, 5);
 console.log(ejercito1);
 console.log(ejercito2);