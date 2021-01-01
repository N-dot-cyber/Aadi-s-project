class Hoop{
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.image=loadImage("basketballhoop.png")
      this.width = 160;
      this.height = 150;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);

      fill("green");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };