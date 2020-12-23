class Plinko{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.r=10;
        this.body=Bodies.circle(x,y,10,options);
     
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x,pos.y,this.r);
    }
}