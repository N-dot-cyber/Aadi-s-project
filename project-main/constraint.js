class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
           bodyB: bodyB,
            stiffness: 0.04,
            length: 4
        }
       
   
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }


    display(){
      
       if( this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            push();
                strokeWeight(7);
                
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                
            pop();
       }
        }
    }
    

