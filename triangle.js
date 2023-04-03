class Triangle{
    constructor(pointA, pointB,pointC){
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }


static TriangleCoordinates(xA,yA,xB,yB,xC,yC){
    const pointA = new Point(xA,yA);
    const pointB = new Point(xB,yB);
    const pointC = new Point(xC,yC)
    return new Triangle(pointA,pointB,pointC)
}



get perimeter(){
    const segment1 = new Segment(this.pointA,this.pointB);
    const segment2 = new Segment(this.pointB,this.pointC);
    const segment3 = new Segment(this.pointC,this.pointA);
    return segment1.length + segment2.length + segment3.length;
}


get area(){
    const segment1 = new Segment(this.pointA,this.pointB);
    const segment2 = new Segment(this.pointB,this.pointC);
    const segment3 = new Segment(this.pointC,this.pointA);
    let semiperimeter = perimeter()/2;
    const area = Math.sqrt(semiperimeter * (semiperimeter-segment1.length) * (semiperimeter-segment2.length) * (semiperimeter.segment3.length))
    return area
}

}