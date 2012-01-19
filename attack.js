var attacks = [];

function attack(atacker,target){
	
	// Add to atacks
	
	
	
	// FROM
	this.x = atacker.x;
	this.y = atacker.y;
	
	//TO
	this.toX = target.x;
	this.toY = target.y;
	
	attacks.push(this);
	
	//Sprite
	// --
	
	//CANVAS
	this.canvas = atacker.attackCanvas;
	
	this.ctx = this.canvas.getContext("2d");
	
	//
	this.width = 20;
	this.height = 20;
	
	// SHOT
	this.shot =  function(){

		var m = (this.toY - this.y) / (this.toX - this.x);
		var b = this.y - this.x*m;
		
		this.animating = setInterval(function(obj){
			
			return(function(){
				obj.ctx.clearRect(0,0,WIDTH,HEIGHT);
				
				for (i in attacks){
					attacks[i].y = m * attacks[i].x + b;
					obj.ctx.beginPath();
					obj.ctx.arc(attacks[i].x ,attacks[i].y,15,0,Math.PI*2,false);
					attacks[i].x+=1;
					obj.ctx.fill();
				}
			});
			
		}(this),1000/FPS);
	}
	
	
}