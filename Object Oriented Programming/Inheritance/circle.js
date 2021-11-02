import {Shape} from "./shape.js";

export class Circle extends Shape {
    constructor() {
        super(color);
        this.radius = radius;
    }
    getArea() {
        this.radius = document.getElementById('circleRadius');
        let circleAreaUser = Math.PI * (this.radius **2);
        document.getElementById('circleArea').innerHTML = "The area of your circle is: "
        + circleAreaUser;
    
    }
}

