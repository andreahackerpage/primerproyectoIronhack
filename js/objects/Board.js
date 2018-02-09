function Board(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "http://www.gamebuildingtools.com/wp-content/uploads/2017/10/City.png",
    this.img.onload = function(){
      this.draw();
    }.bind(this);

    this.draw = function(){
      ctx.fillStyle = "rgba(255,255,255, 0.5";
      ctx.drawImage(this.img, this.x,this.y, this.width, this.height)
    }
  }

  function BoardWhite(){
    this.x = 220;
    this.y = 170;
    this.width = canvas.width;
    this.height = canvas.height;

    this.draw = function(){
      ctx.fillStyle = "rgba(255,255,255, 0.8)";
      ctx.fillRect( this.x,this.y, 700, 400);
    }
  }






