

let x = 100;
let y = 100;
let song;

    

// Can simplify declaring variables by separting them with commas
var carrois,dancing,indie,right,stint,viaoda,big,concert,herr,indie,londrina,monoton,pangolin,press,reenie;



/*
  First need to declare the variable font. 
  When placed outside of functions, 
  they are a global variable to be used anywhere.
*/
var font;

var letters = [];

function preload(){
  // Had the right idea, need to load the fonts in the preload function
  carrois=loadFont('CarroisGothic-Regular.ttf');
  dancing=loadFont('DancingScript-VariableFont_wght.ttf');
  indie=loadFont('IndieFlower-Regular.ttf');
  right=loadFont('Righteous-Regular.ttf');
  stint=loadFont('StintUltraCondensed-Regular.ttf');
  viaoda=loadFont('ViaodaLibre-Regular.ttf');
  big=loadFont('BigShouldersStencilDisplay-Bold.ttf');
  concert=loadFont('ConcertOne-Regular.ttf');
  herr=loadFont('HerrVonMuellerhoff-Regular.ttf');
  indie=loadFont('IndieFlower-Regular-1.ttf');
  londrina=loadFont('LondrinaShadow-Regular.ttf');
  monoton=loadFont('Monoton-Regular.ttf');
  pangolin=loadFont('Pangolin-Regular.ttf');
  press=loadFont('PressStart2P-Regular.ttf');
  reenie=loadFont('ReenieBeanie-Regular.ttf');
  

/* 
  Why the random font wasn't working 
  is because the font variable needs to be initalized 
  after the fonts have been loaded in the sketch.
*/
  font = [carrois,dancing,indie,right,stint,viaoda,big,concert,herr,indie,londrina,monoton,pangolin,press,reenie];
}


function setup() {
  createCanvas(1920,1080);
  background(255);
  song=loadSound('keysound.wav');
  textSize(24);
  noStroke();
  textFont("Helvetica");
  
  for (var num = 0; num < 0; num++) {
    letters[num] = new Letter(width/2,height/2,random(-12,2),random(-5,2),random(100));
  }
  // fill(255, 0, 0);
  // font[0]=
  
}


  
function draw() {
  background(220);
  // size+=1;
  // x+=3;
  // y+=3;
  // textSize(size);
  // textAlign(CENTER,CENTER);
  // text('a',x,y);
  // text(contents, 50, 50, 300, 300);
  for (var num = 0; num < letters.length; num++) {
    letters[num].animate();
    letters[num].show(); 

  }
  
 }

function keyTyped() {
/* 
  Can move the textFont function outside 
  of the if statements since you want 
  this to be applied to any key when pressed
*/
  var l = new Letter(width/2,height/2,random(-12,20),random(-5,2),random(100),random(1,5),key,random(font));
    letters.push(l);
	song.play();
}

class Letter {
  constructor(x,y,xm,ym,s,sg,textval,fontm) {
    // How can you add a variable here to determine which letter appears
   
    // this.l=l
    this.x = x;
    this.y = y;
    this.xMove = xm;
    this.yMove = ym;
    this.s = s;
    this.sizeGrowth = sg;
    this.textVal = textval;
    this.FontM = fontm;
  }
  animate() {
    
    this.x += this.xMove;
    this.y += this.yMove;
    this.s += this.sizeGrowth;
    // If outside boundary maybe delete?
    if (this.x > width-this.s|| this.x<0) { 
      this.xMove = 0;
      this.sizeGrowth = 0;
    }
    if (this.y > height-this.s|| this.y<this.s) {
      this.yMove = 0;
      this.sizeGrowth = 0;
      print(this.x);
      print(this.xMove);
    }
  }
  show() {
    textFont(this.FontM);
  	textSize(this.s);
  	fill(0);
  	
  	text(this.textVal,this.x,this.y);
  }
}