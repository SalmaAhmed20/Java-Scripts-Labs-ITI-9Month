import { Circle } from "./CircleModule.js"
import{Rectangle, Square} from "./SquaresModule.js"
var Shapes=[];
Shapes.push(new Circle(5,5,"red"));
Shapes.push(new Square(5,"blue"));
Shapes.push(new Rectangle(3,4,"yellow"));
Shapes.push(new Circle(6,6,"pink"));
Shapes.push(new Rectangle(12,16,"purple"));
Shapes.push(new Square(3,"black"));
Shapes.forEach((a)=>console.log(a));
Shapes.forEach((a)=>a.getArea());
