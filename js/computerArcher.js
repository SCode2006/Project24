class ArtificialArcher{
    constructor(x, y, width, height, angle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        
        this.body = Bodies.rectangle(x,y,width,height,angle);
        this.image = loadImage("./assets/computerArcher.png");

        World.add(world,this.body);
      }
      display() {
        if (keyIsDown(UP_ARROW) && this.angle < 1.77) {
          this.angle += 0.02;
        }
    
        if (keyIsDown(DOWN_ARROW) && this.angle > 1.47) {
          this.angle -= 0.02;
        }
        Matter.Body.setAngle(this.body,-PI/2);
        imageMode(CENTER);
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        image(this.image,0,90,this.width,this.height);
        pop();
        arc(this.x + 30, this.y - 90, 140, 200, TWO_PI, PI);
        
      }
}