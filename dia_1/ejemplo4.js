class Professor {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  SoyElProfe() {
    console.log("Soy el profe" + this.nombre);
  }
  get edadMinima() {
    return 12;
  }
  get edad() {
    return this._edad;
  }

set edad(value){
    if (value<this,edadMinima){
        console.log("demasiado joven para dar clase.");
        return;
    }
    this._edad=value
}
static crearProfesorBot(){
    return new this("BotMarcos",99);
}
}

const profesor1 = new Professor1("marcos", 44);
