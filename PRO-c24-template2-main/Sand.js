class Sand{
	constructor(x,y,r)
	{
		var options={
			restituion:0.3,
			friction:5,
			density:1
		}
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options)
        World.add(world,this.body)
    }
    display()
    {
        
			var sandpos=this.body.position;		
			push()
			translate(sandpos.x, sandpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball

			pop()
    }
}