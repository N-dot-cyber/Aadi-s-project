class Boy{
    constructor(x,y,width,height)
    {
    var options={
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5,
    isStatic:true
    
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    //this.animation=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png");
   //his.image=loadImage("boy1.png")
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
     var pos= this.body.position
     
     /*   if(keyDown(DOWN_ARROW)){
           this.body.position.y=this.body.position.y+5;
        }
        if(keyDown(UP_ARROW)){
            this.body.position.y=this.body.position.y-5;
         }
         if(keyDown(LEFT_ARROW)){
            this.body.position.x=this.body.position.x-5;
         }
         if(keyDown(RIGHT_ARROW)){
            this.body.position.x=this.body.position.x+5;
         } */
         this.body.position.x=mouseX;
         this.body.position.y=mouseY;
        // image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
        //animation(this.animation,this.body.position.x,this.body.position.y);
    }
    }