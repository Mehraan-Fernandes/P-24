class Shooter {
    constructor(x, y, width, height){
      var options={
          'isStatic':true
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width=width;
      this.height=height;
      World.add(world,this.body);
      
      }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        angleMode(DEGREES)

        if(keyIsDown(UP_ARROW)&&angle<=40&&angle>-38){
        angle-=1
        Matter.Body.setAngle(this.body,angle)            
        }
    
        if(keyIsDown(DOWN_ARROW)&&angle>-40&&angle<=30){
        angle+=1
        Matter.Body.setAngle(this.body,angle)
        }
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }  
    





    }