import {Shape} from "./shapeModule.js";
export class Circle extends Shape {

    #x ;
    #y ;
    constructor(_x, _y, _color) {
        super(_color);
        this.X= _x;
        this.Y = _y;
    }
    set X(_x) {
        if (_x > 0)
            this.#x= _x
    }
    get X() {
        return this.#x;
    }
    set Y(_y) {
        if (_y > 0)
            this.#y = _y;
    }
    get Y() {
        return this.#y;
    }
    getArea() {
        let Area = 3.14*this.X * this.Y;
        console.log(`Circle Area = ${Area} ,`);  super.DrawShape();
    }
};