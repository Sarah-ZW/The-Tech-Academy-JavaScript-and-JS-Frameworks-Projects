import {Shape} from './shape.js';

export class Rectangle extends Shape {
    constructor(color, height, width) {
        super(color);
        this.height = height;
        this.width = width;
    }
    getArea() {
            this.height = document.getElementById('rectangleHeight');
            this.width = document.getElementById('rectangleWidth');
            let rectangleAreaUser = this.height * this.width;
            document.getElementById('rectangleArea').innerHTML = "The area of your rectangle is: "
             + rectangleAreaUser;    
    }

}