var picture;
  var interval;
  var frames = 0;


function Picture(){
  this.which = true;
  this.x = 30;
  this.y = 200;
  this.width = 200;
  this.height = 200;
  this.img1 = new Image();
  this.img1.src = images.tod1;
  this.img2 = new Image();
  this.img2.src = images.tod2;
  //this.img1.onload = function(){
    //this.draw();
  //}.bind(this);
  this.draw = function(){
    var img = this.which ? this.img1:this.img2;
    ctx.drawImage(img,this.x,this.y,this.width,this.height);
    if(frames%20===0) this.toggleWhich();
  }
  this.toggleWhich = function(){
    this.which = !this.which;
  }
}