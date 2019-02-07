function Profesor(nombre,edad)
{
this.nombre=nombre;
this.edad=edad;
}
const profesor1=new Profesor('marcos',44);
console.log(profesor1.nombre)
profesor1.nombre='marcos javier';
console.log(profesor1.nombre)
Profesor.prototype.soyElProfe=function(){
    console.log("soy el profe" + this.nombre)
}
profesor1.soyElProfe();

const profesor2=new Profesor('pepe',40);
profesor2.soyElProfe();

Profesor.prototype.cumple=function(){
this.edad =this.edad+1;
}
profesor2.cumple();
console.log(profesor2.edad);