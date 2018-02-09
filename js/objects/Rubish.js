var overlay =new Image;
overlay.src = "../shield.png"
function Rubish(positionX,y,letter,src, type){
    this.x = positionX;
    this.y = y;
    this.letter = letter;
    this.type=type;
    this.width = 120;
    this.height = 100;
    this.img = new Image();
    this.img.src = src;
    this.overlay = false;
    this.img.onload = function(){
      this.draw();
    }.bind(this);
    this.draw = function(){
      ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
      ctx.font = "40px robot";
      ctx.fillStyle = "black";
      ctx.fillText(this.letter,this.x+50,this.y+120);
    }
    this.drawOverlay = function(){
      ctx.drawImage(overlay,this.x-this.width*0.5,this.y-this.height*0.5,this.width*2,this.height*2);
      console.log("dibuja")
    }
  }
  
  function fila1(){
    var x = 300;
    var y = 200;
    for(var i=0;i<3;i++){
      var indexBasura = Math.floor(Math.random()*basuraLinks.length);
      var indexLetter = Math.floor(Math.random()*charOptions.length);
      arrRubish.push(new Rubish(x,y,charOptions[indexLetter], basuraLinks[indexBasura].img,basuraLinks[indexBasura].type));
      basuraLinks.splice(indexBasura,1);
      charOptions.splice(indexLetter,1);
      x+=200;
    }
    title=new Rubish (355, 10, "R U B I S H L Y", "","");
  }
  
  function fila2(){
    var x = 300;
    var y = 400;
    for(var i=0;i<3;i++){
      var indexBasura = Math.floor(Math.random()*basuraLinks.length);
      var indexLetter = Math.floor(Math.random()*charOptions.length);
      arrRubish.push(new Rubish(x,y,charOptions[indexLetter],basuraLinks[indexBasura].img,basuraLinks[indexBasura].type));
      basuraLinks.splice(indexBasura,1);
      charOptions.splice(indexLetter,1);
      x+=200;
    }
    console.log(arrRubish);
  }


