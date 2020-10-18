class Ground{
    constructor(posx,posy,width,height){
        var options = { isStatic : true}

        this.body = Bodies.rectangle(posx,posy,width,height,options);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("grey");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}