class Chain {
    constructor(body1,body2){

        var options={
            bodyA:body1,
            bodyB:body2,
            length:50,
            stiffness:0.5            
        }
        this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain)
    }

    display(){
        
        var point1 = this.chain.bodyA.position
        var point2 = this.chain.bodyB.position
        line (point1.x,point1.y,point2.x,point2.y)

    }


    
}