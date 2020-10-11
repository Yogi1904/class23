class Box {

     constructor(x, y, width, height){

      /*  var option = {
            isStatic: true
        }*/
        this.box = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.box);

     }

     display(){
 
        var position1 = this.box.position;
        var angle = this.box.angle;
        push();
        translate(position1.x, position1.y);
        rotate(angle);

        rectMode(CENTER);
        fill("red");
        stroke("red");
        rect(position1.x, position1.y, this.width, this.height);
     }

}