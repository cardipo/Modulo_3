class Polygon {
    constructor(name, sides) {
      this.name = name;
      this.sides = sides;
    }
    getarea()
    {
console.log("No sabemos el area");
    }
}
    
class Triangle extends Polygon{
    constructor(base,height){
        super("Triangle",3)
        this.base=base;
        this.height=height;
    }

    getarea(){
        return this.base*this.height/2;
    }
}
class Rectangle extends Polygon{
    constructor(base, height){
        super("Rectangle",4)
        this.base=base;
        this.height=height;
    }
    getarea(){
        return this.base*this.height;
    }
    
}

class Square extends Rectangle{
    constructor(side){
        super(side, side);

        this.name="square";
    }
}
class Circle extends Polygon{
    constructor(radius){
        super("Circle",0)
        
        this.radius=radius;
    }

    getarea(){
        return this.radius*this.radius*(Math.PI);}
}
class Dodecagono extends Polygon{
    constructor(perimeter, apotem){
        super("dodecagono",4)
        this.perimeter=perimeter;
        this.apotem=apotem;
        return this.perimeter*this.apotem/2


}}
const polygon=new Polygon("Pentagon",5);
console.log(polygon)

const triangle=new Triangle(4,2);
console.log(triangle.getarea());


const rectangle=new Rectangle(5,2);
console.log(rectangle.getarea());

const square=new Square(5);
console.log(square.getarea());

const circle=new Circle(8);
console.log(circle.getarea());


const dodecagono=new Dodecagono(5,2);
console.log(dodecagono.getarea());