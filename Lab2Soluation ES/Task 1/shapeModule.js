export class Shape {
    #color = "red"; //private Attribute
    constructor(_color) {
        if (new.target == Shape) {
            throw new Error("abstract Class ,, you can't create an object from it !!!!!");
        }
        this.Color = _color
    }
    // properties
    set Color(_color) {
        let flag = true;
        if (_color != '') {
            for (let i = 0; i < _color.length; i++) {
                if (Number(_color[i])) {
                    flag = false;
                    break
                }
            }
            if (flag)
                this.#color = _color;
        }
    }
    get Color() {
        return this.#color;
    }
    DrawShape() {
        console.log(`Color = ${this.Color}`);
    }
};
