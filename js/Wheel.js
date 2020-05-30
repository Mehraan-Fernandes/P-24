class Wheel {
    constructor(x, y, radius){
        var options = {
        'isStatic': true
       }
      
      this.wheel = Bodies.circle(x,y,radius,options)
      
      this.radius=radius;
      World.add(world,this.wheel);
      
      }
  
      display(){
        // Draw the tanker the way you like.
        // You could also use an image if you want a specific look
        push();
        ellipseMode(CENTER);
        strokeWeight(1)
        fill("yellow")
        circle(this.wheel.position.x,this.wheel.position.y,this.radius);
        pop();
      }
  }