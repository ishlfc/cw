class Canonball{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.radius = 30;
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,this.radius, options);
        this.image = loadImage("./assets/cannonball.png");
        World.add(world,this.body);
    
    }

    display() {
        var pos = this.body.position;
        push();
                imageMode(CENTER);
                image(this.image,pos.x,pos.y,this.r,this.r);
                image.scale = 0.5;
        pop();
    }
}