function Bin(positionY, letter,number){
    this.x = 1000;
    this.y = positionY;
    this.letter=letter;
    this.number= number;
    this.width = 150;
    this.height = 100;
    this.onleft= true;
    this.img = new Image();
    this.img.src = "https://www.shareicon.net/data/512x512/2015/11/04/666873_recycle-bin_512x512.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
    this.draw = function(){
            ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
            ctx.font = "20px robot";
      ctx.fillStyle = "black";
      ctx.fillText(this.letter,this.x+30,this.y-10);
    }
  
  }

  


