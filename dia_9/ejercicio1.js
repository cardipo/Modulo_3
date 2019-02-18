// Creación de un generador de cuentas bancarias y clientes
// 	Factoria:Banco
// 	Clase:Cuenta, Clientes
	


// Añadir un prototype de tipo de cuenta en el que se establezca el valor de la comisión por defecto.	

// Añadir a la clase Banco un evento EnviarPublicidad
// subscribir al evento de lanzar publicidad a Varios clientes
// funcion en cada cliente :leer publicidad


// Crear un singleton que genere la misma instancia del banco (la factoría del punto 1)


// La clase Cuenta tendrá: 
// 	-Objeto Cliente
// 	-Objeto Banco
// 	-Propiedad Saldo

// La clase Cliente tendrá::
// 	- Lista de Cuentas
// 	- Función GetSaldoTotal
// 	- Leer publicidad
	
//  La clase banco	
// 	- Nombre
// 	- Lista de cuentas
// 	- Función LanzaarPublicidad (texto publicidad)
// 	- Lista de clientes que aceptan publicidad (observer)

class Banco {
  constructor(nombre) {
      this.nombre = nombre;
      this.cuentas = [];
      this.clientes = [];
      this.subscriptores = [];
      this.cuentaBase=null;
  }
  
  CrearCuenta(cliente) {
      const nuevaCuenta = this.GenerarCuenta(cliente);
      this.AnadirCuenta(nuevaCuenta);
      this.AnadirCliente(cliente);
      cliente.AnadirCuenta(nuevaCuenta);
      return nuevaCuenta;
  }
  CrearCliente(nombreCliente) {
      const nuevoCliente = new Cliente(nombreCliente);
      this.AnadirCliente(nuevoCliente);
      return nuevoCliente;
  }
  
  AnadirCliente(cliente) {
      if (this.clientes.indexOf(cliente) === -1) {
          this.clientes.push(cliente);
      }

  }
  AnadirCuenta(cuenta) {
      if (this.cuentas.indexOf(cuenta) === -1) {
          this.cuentas.push(cuenta);
      }
  }
  EstablecerCondiciones(cuentaBase){
      this.cuentaBase= cuentaBase;
  }
  GenerarCuenta(cliente){
      const nuevaCuenta = new Cuenta(cliente,this);
      if(this.cuentaBase){
          nuevaCuenta.Comision= this.cuentaBase.Comision;
      }
      return nuevaCuenta;
  }
}

class Cuenta {
  constructor( cliente, banco) {
      this.cliente = cliente;
      this.banco = banco;
      this.saldo = 0;
      this._comision=0;
  }
  get Comision(){
      return this._comision;
  }
  set Comision(nuevaComision){
      this._comision=nuevaComision;
  }
  
}
class Cliente {
  constructor(nombre) {
      this.nombre = nombre;
      this.cuentas = [];
  }
  AnadirCuenta(cuenta) {
      if (this.cuentas.indexOf(cuenta) === -1) {
          this.cuentas.push(cuenta);
      }
  }
}

LeerPublicidad(evento){
  console.log(this.nombre,"Has leído la publicidad",evento);
}

const banco = new Banco("BBVA");
const cliente1= banco.CrearCliente("Marcos");
const cliente2= banco.CrearCliente("Javier");
const cuenta1 = banco.CrearCuenta(cliente1);

const cuentaFicticia = new Cuenta(null,banco);
cuentaFicticia.Comision= 1;
banco.EstablecerCondiciones(cuentaFicticia);
const cuenta2 = banco.CrearCuenta(cliente1);
const cuentaFicticia2 = new Cuenta(null,banco);
cuentaFicticia2.Comision= 2;
banco.EstablecerCondiciones(cuentaFicticia2);

const cuenta3 = banco.CrearCuenta(cliente2);