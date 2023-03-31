import { Shape } from "./shapeModule.js";
export class Rectangle extends Shape {

    #width;
    #height;
    constructor(_width, _height, _color) {
        super(_color);
        this.Width = _width;
        this.Height = _height;
    }
    set Width(_width) {
        if (_width > 0)
            this.#width = _width
    }
    get Width() {
        return this.#width;
    }
    set Height(_height) {
        if (_height > 0)
            this.#height = _height
    }
    get Height() {
        return this.#height;
    }
    getArea() {
        console.log("Rectangle");
        let Area = this.Width * this.Height;
        console.log(`Area = ${Area} `); super.DrawShape();
    }
};
export class Square extends Rectangle {
    #dim1 = 0;
    constructor(_dim1, _color) {
        super(_dim1, _dim1, _color);
        this.Dim1=_dim1;
    }
    set Dim1(_dim1) {
        if (_dim1 > 0)
            this.#dim1 = _dim1;
    }
    get Dim1() {
        return this.#dim1;
    }
    getArea() {
        console.log("Square");
        let Area = this.Dim1 * this.Dim1;
        console.log(`Area = ${Area} `); super.DrawShape();
    }
};