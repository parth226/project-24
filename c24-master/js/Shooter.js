
class Shooter {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          
          isStatic : true,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
 
      rectMode(CENTER);
      
     // shooter1.angle = mouseY;

      rect(0, 0, this.width, this.height);
      pop();
     if(keyIsDown(LEFT_ARROW) && angle > -1.5708){
      angle -=0.05; Matter.Body.setAngle( shooter1.body, angle); 
   }
    }

}

