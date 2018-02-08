 
 function Player(){
    this.x = 30;
    this.y = 200;
    this.width = 200;
    this.height = 200;
    this.speed = 0;
    this.img = new Image();
    this.img.src = "https://yourguthealthcoach.com/wp-content/uploads/2016/12/KidsHealth_Illustration_New_02.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
    this.draw = function(){
     //this.y-=this.speed; 
      this.speed++;   ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
    this.getUp = function(){
      this.y-=20;
      this.speed = 0;
    }
  }

 
  