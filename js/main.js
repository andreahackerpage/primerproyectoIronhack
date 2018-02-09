var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



var BANANA = "https://img00.deviantart.net/4ef5/i/2011/239/6/e/banana_peel_by_kna-d481n3u.png";
var ATUN = "https://image.flaticon.com/icons/png/512/385/385149.png";
var LECHE = "http://i46.tinypic.com/if234j.jpg";
var AGUACATE= "https://cdn130.picsart.com/234635553059212.png?r1024x1024";
var TV="http://www.clker.com/cliparts/c/a/c/2/12316861951931359250rg1024_cartoon_tv.svg.hi.png";
var FLORES="http://moziru.com/images/daisy-clipart-flower-bunch-7.png";

var organica = "organica";
var inorganica="inorganica";
var reciclado="reciclado";
var overlayActive = false;
var win = false;
var basuraLinks = [
  {
    img : BANANA,
    type: 1
  },
  {
    img: ATUN,
    type: 3
  },
  {
    img: LECHE,
    type: 3
  },
  {
    img : AGUACATE,
    type: 1
  },
  {
    img : TV,
    type: 2
  },
  {
    img : FLORES,
    type: 1
  },
];


var charOptions = [
  "A","B","C","D","E","F"
]
var arrRubish = [];
var arrSolution=[];
var board;
var board1;
var player1;
var interval;
var bins;
var frames = 0;
var errores= 0;

//boton que haga shuffle pero no lo hace
$("#button").on("click", function(){
  startGame();
      
}) 

function startGame(){
    //se debe resetear todo!!!! 
    frames = 0;
    board = new Board();
    board1= new BoardWhite();
    player1 = new Player();
    bin1= new Bin(180, "Orgánica",1);
    bin2= new Bin (320, "Inorgánica",2);
    bin3= new Bin (480, "Reciclado",3)
    fila1();
    fila2();
    console.log(arrRubish)
  
    
    interval = setInterval(updateGame,1000/60);
  }
     
  
  function updateGame(){
    frames++;
    board.draw();
    board1.draw();
    player1.draw();
    bin1.draw();
    bin2.draw();
    bin3.draw();

    
    arrRubish.forEach(function(rubish){
      rubish.draw();
      if (rubish.overlay){
        rubish.drawOverlay();
      }
    });

    title.draw();

    if (win){
      ctx.fillStyle = "black";
      ctx.font = "50px sarif";
      ctx.fillText("¡Ganaste!", 450, 300)
    }
  

  }

  var chars = {
    65:"A",
    66:"B",
    67:"C",
    68:"D",
    69:"E",
    70:"F"
  }
  
  //listeners
  addEventListener("keydown", function(e){
    var res = String.fromCharCode(e.keyCode);
    console.log(res)
    if (overlayActive===false){
      for (var i =0; i<arrRubish.length;i++){
        if (res===arrRubish[i].letter){
          arrRubish[i].overlay=true;
          overlayActive=true;
        }
      }
    } else {
      arrRubish.forEach(function(rubish, index){
        if (true===rubish.overlay){
          rubish.overlay=false;
          overlayActive=false;
          if (res==rubish.type){
            arrRubish.splice(index, 1);
            if (arrRubish.length===0){
              win = true;
            }
          }
        }
      })
        
      }
    
      
   
  });
  
  function botes(){
    for (i=0; i<filaBins.length; i++){
      console.log(filaBins[i].letter)
      if(filaBins[i].letter==arrSolution[0])
      console.log("emparejamiento encontrado")
    }
    
  }



  startGame();

  
  
 