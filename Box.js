class Box{
    constructor(posx,posy,width,height){
        var options = {
            restitution : 1.0,
            //isStatic : true
        }
        this.body = Bodies.rectangle(posx,posy,width,height,options);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("yellow");
        //console.log(this.width);
        //translate(this.body.position.x,this.body.position.y);
        translate(100,100)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}