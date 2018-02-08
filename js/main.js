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

var basuraLinks = [
  {
    img : BANANA,
    type: organica
  },
  {
    img: ATUN,
    type: reciclado
  },
  {
    img: LECHE,
    type: reciclado
  },
  {
    img : AGUACATE,
    type: organica
  },
  {
    img : TV,
    type: inorganica
  },
  {
    img : FLORES,
    type: organica
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
    });

    title.draw();

  }

  var chars = {
    65:"A",
    66:"B",
    67:"C",
    68:"D",
    69:"E",
    70:"F"
  }
  
    bin1.number=1 == arrSolution[1]
    bin2.number=2 == arrSolution[1]
    bin3.number=3 == arrSolution[1]
  
  //listeners

  addEventListener("keydown"), function(e){
    switch(e.keyCode){
      case 65:
          if(basuraLinks.type===bin1){
          console.log("acierto");
          }else{
            console.log("error")
          }
          break;
      case 66:
          code block
          break;
      case 67:
          code block
          break;
      case 68:
          code block
          break;
      case 69:
          code block
          break;
      case 70:
          code block
          break;
      default:
          code block
  }

  }
  addEventListener("keydown", function(e){
    var res = String.fromCharCode(e.keyCode);
    console.log(arrSolution)
    if(arrSolution.length==2){
      botes();
      console.log("no puedes rellenar mas");
    }else{
      arrSolution.push(res)
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

  
  
 