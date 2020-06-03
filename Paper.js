class Paper {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.8,
          friction:0.5,
          density:1.2,

      }
      this.body = Bodies.circle(x,y,50,options);

      this.image=loadImage ("sprites/paper.png");
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("green");
      ellipse(pos.x, pos.y, 30, 30);
    }
  };