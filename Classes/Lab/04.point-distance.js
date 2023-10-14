class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance(firstPoint, secondPoint){
       let a = firstPoint.x - secondPoint.x;
       let b = firstPoint.y - secondPoint.y;
       return Math.sqrt(a ** 2 + b ** 2);
    }
}

let pointOne = new Point(5,5);
let pointTwo = new Point(9,8);
console.log(Point.distance(pointOne, pointTwo))

