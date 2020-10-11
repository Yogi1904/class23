class Ground {

    constructor(x, y, width, height){

       var options = {
           isStatic: true
       }
       this.ground = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       World.add(world, this.ground);

    }

    display(){

       var position2 = this.ground.position;

       fill(rgb(139, 69, 19));
       stroke(rgb(139, 69, 19));
       rectMode(CENTER);
       rect(position2.x, position2.y, this.width, this.height);
    }

}