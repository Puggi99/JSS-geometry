class Segment{
    constructor(pointA,pointB){
        this.pointA = pointA;
        this.pointB = pointB;
    }

    static fromPointsCoordinates(xA,yA,xB,yB){                  // FACTORY
        const pointA = new Point(xA,yA);
        const pointB = new Point(xB,yB);
        return new Segment(pointA, pointB)
    }

    calculateLength(params){
        const deltaX = this.pointA.x - this.pointB.x;
        const deltaY = this.pointA.y - this.pointB.y;

        const squareDX = deltaX **2;
        const squareDY = deltaY **2;

        const squareSum = squareDX + squareDY;
        const length = Math.sqrt(squareSum);
        return length;
    }
}

// compito:
// triangolo formato da 3 segment , calcolare ogni segment e calcolare l'area del triangolo (formula perone) e il perimetro