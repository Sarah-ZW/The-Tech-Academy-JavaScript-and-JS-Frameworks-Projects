class Shape {
    constructor(color) {
        this.color = color;
    }
    getArea() {
        
    }
}

//circle
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        let circleAreaUser = Math.PI * (this.radius **2);
        return circleAreaUser;
    
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
            let rectangleAreaUser = this.height * this.width;
            return rectangleAreaUser;    
    }
}

//triangle
class Triangle extends Shape {
    constructor(color, height, base) {    
    super(color);
    this.color = color;
    this.height = height;    
    this.base = base;
        
    }
    getArea(){
        let triangleAreaUser =(this.height * this.base)/2;
        return triangleAreaUser;    
    }
}

//instantiate
function getTriangleArea() {
    let height = document.getElementById('triangleHeight').value;
    let base = document.getElementById('triangleBase').value;
    let color = 'blue';
    triangleInstance = new Triangle(color, height, base);
    let answer =triangleInstance.getArea();
    document.getElementById('triangleArea').innerHTML = "The area of your triangle is: "
     + answer; 
}

function getCircleArea() {
    let radius = document.getElementById('circleRadius').value;
    let color = 'red';
    let circleInstance = new Circle(color, radius);
    let answer = circleInstance.getArea();
    document.getElementById('circleArea').innerHTML = "The area of your circle is: "
        + answer;
}

function getRectangleArea() {
    let height = document.getElementById('rectangleHeight').value;
    let width = document.getElementById('rectangleWidth').value;
    let color = 'green';
    let rectangle = new Rectangle(color, height, width);
    let answer = rectangle.getArea();    
    document.getElementById('rectangleArea').innerHTML = "The area of your rectangle is: "
             + answer;
}
