class Paper {
    constructor(){
        var options={
            isStatic:false,
            restituition:false,
            friction:0.5,
            density:1.2
        }
        Matter.Bodies.circle(50,50,50);
    }
  
}

function keyPressed(){
    if(keyCode === UP_ARROW){

        Matter.body.applyForce(paperObject.body,paperObject.bodyPosition,{x:85,y:-85});
    }
}