class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.m = loadImage("mango.png");
        this.mango = Bodies.circle(this.x, this.y,(this.r)/3, options);
        World.add(world, this.mango);
    }
    display(){
			
        var mpos=this.mango.position;		

        push();
        translate(mpos.x, mpos.y);
        imageMode(CENTER);
        image(this.m,0,0,50,50);
        pop();
}
}