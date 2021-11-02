import {Shape} from "./shape.js";

export class Triangle extends Shape {
    constructor() {    
    super(color);
        this.base = base;
        this.height = height;
    }
    getArea(){
        this.height = document.getElementById('triangleHeight');
        this.base = document.getElementById('triangleBase');
        let triangleAreaUser = (this.height * this.base)/2;
        document.getElementById('triangleArea').innerHTML = "The area of your triangle is: "
         + triangleAreaUser;
    }
}