class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility = 255;
  }
  display(){
    //console.log(this.body.speed);
    if(this.body.speed < 3){
      super.display();
    }
    else
    {
      var positionA = this.body.position;
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility-5;
      tint(255,this.Visibility);
      image(this.image,positionA.x,positionA.y,50,50);
      pop();
    }
  }

};