class Shape {
    constructor(color) {
        this.color = color;
    }
    getArea() {
        
    }
}

//circle
class Circle extends Shape {
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

//rectangle
class Rectangle extends Shape {
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

//triangle
class Triangle extends Shape {
    constructor() {    
    super(color);
        this.base = base;
        this.height = height;
    }
    getArea(height, base){
        height = document.getElementById('triangleHeight');
        base = document.getElementById('triangleBase');
        let triangleAreaUser = (height * base)/2;
        document.getElementById('triangleArea').innerHTML = "The area of your triangle is: "
         + triangleAreaUser;
    }
}

//instantiate
function TriangleOnClick() {
    triangleInstance = new Triangle();
    triangleInstance.getArea();
}
}
let userTriangle = new Triangle('blue',5,5);
