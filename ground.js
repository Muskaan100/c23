class Ground{
    constructor(xground,yground,widthground,heightground){
    var groundproperty= {
        'isStatic': true
    }
    this.body = Bodies.rectangle(xground,yground,widthground,heightground,groundproperty);
    this.height=heightground;
    this.width=widthground;
    World.add(world,this.body);
    
    }
    display(){
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}