class Tree{
    constructor(width, height) {

        
        this.body = Bodies.rectangle(900, 510, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
    }
      
     display(){
        imageMode(CENTER);
        image(this.image, 600, 460, this.width, this.height);}
   
      
    }

