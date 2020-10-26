class chain {
    constructor(bodyA,bodyB){
        var options={
          bodyA:bodyA,
          bodyB:bodyB,
          stiffness:0.04,
          length:10  
        }
        this.chain1=Constraint.create(options)
        World.add(world,this.chain1)
    }
    display(){
    line(this.chain1.bodyA.position.x,this.chain1.bodyA.position.y,this.chain1.bodyB.position.x,this.chain1.bodyB.position.y);
    }
}