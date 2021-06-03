class Paper{
constructor(x,y,r){
    
this.paperImage=loadImage("paper.png")
var options={
isStatic:false,
density:1.2,
friction:0,
restitution:0.3
}

}

display(){
		
        ellipse(50,600,this.r,this.r)
	

};
}