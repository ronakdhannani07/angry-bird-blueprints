//Blueprint - class 

class Ground{

    //Properties
    constructor(x, y, width, height){
        var options ={
            // ground should not fall due to gravity
            isStatic: true
        }
    
        this.body = Bodies.rectangle(x,y,this.width,20,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    
    }
      //Functions
    display(){
        var pos = this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x, pos.y,this.width,this.height);
    }
  
}