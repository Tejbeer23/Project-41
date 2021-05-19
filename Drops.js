class Drops{
    constructor(x,y){
        var options = {
            friction : 0.1 
        }

        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r+5);
        
    
Update()
   if(this.Drops.position.y > height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }

    }
   
    
 }