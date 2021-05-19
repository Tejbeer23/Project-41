class Umbrella{
    constructor(x,y,r){
        this.image = loadImage("Walking Frame/walking_1.png");        var options={
            isStatic:true
        }
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
      
        World.add(world,this.body);
    }
display(){
    var pos = this.body.position;
    ellipseMode(CENTER);
    noStroke()
    ellipse(pos.x,pos.y,this.r,this.r)
    image(this.image, this.body.position.x, this.body.position.y, 150, 150);
 }
}