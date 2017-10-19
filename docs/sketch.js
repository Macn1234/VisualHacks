var rotX=0, rotY=0;
var vertices;


var yy=0;
var rotX=0, rotY=0;
var vertices;


var yy=0;
var xx=0;
var c;

var p1,p2,p3,p4,p5,p6,p7,p8;


function setup(){


    createCanvas(800, 800, WEBGL);

    p1=createVector(0,0,0);
    p2=createVector(200,0,0);
    p3=createVector(200,-200,0);
    p4=createVector(0,-200,0);
    p5=createVector(0,0,200);
    p6=createVector(200,0,200);
    p7=createVector(200,-200,200);
    p8=createVector(0,-200,200);

    c = color(81,214,214,50);
}


function draw(){
   background(50);
   fill(c);
   stroke("#115299");
   strokeWeight(3);

   translate(width/2, height/2);

   camera(500, -500, 500, 0, 0, 0.0, 0.0, 1.0, 0.0);


   rotateX(rotX);
   rotateY(-rotY);


   aumento();

   axes();

   beginShape();
   vertex(p1.x,p1.y,p1.z);
   vertex(p2.x,p2.y,p2.z);
   vertex(p3.x,p3.y,p3.z);
   vertex(p4.x,p4.y,p4.z);
   endShape(CLOSE);

   beginShape();
   vertex(p5.x,p5.y,p5.z);
   vertex(p6.x,p6.y,p6.z);
   vertex(p7.x,p7.y,p7.z);
   vertex(p8.x,p8.y,p8.z);
   endShape(CLOSE);

   beginShape();
   vertex(p1.x,p1.y,p1.z);
   vertex(p4.x,p4.y,p4.z);
   vertex(p8.x,p8.y,p8.z);
   vertex(p5.x,p5.y,p5.z);
   endShape(CLOSE);


   beginShape();
   vertex(p2.x,p2.y,p2.z);
   vertex(p3.x,p3.y,p3.z);
   vertex(p7.x,p7.y,p7.z);
   vertex(p6.x,p6.y,p6.z);
   endShape(CLOSE);


   beginShape();
   vertex(p1.x,p1.y,p1.z);
   vertex(p2.x,p2.y,p2.z);
   vertex(p6.x,p6.y,p6.z);
   vertex(p5.x,p5.y,p5.z);
   endShape(CLOSE);


   beginShape();
   vertex(p3.x,p3.y,p3.z);
   vertex(p4.x,p4.y,p4.z);
   vertex(p8.x,p8.y,p8.z);
   vertex(p7.x,p7.y,p7.z);
   endShape(CLOSE);

}

function aumento(){
   p1.x=p1.x+xx*p1.z;
   p1.y=p1.y+yy*p1.z;
   p2.x=p2.x+xx*p2.z;
   p2.y=p2.y+yy*p2.z;
   p3.x=p3.x+xx*p3.z;
   p3.y=p3.y+yy*p3.z;
   p4.x=p4.x+xx*p4.z;
   p4.y=p4.y+yy*p4.z;
   p5.x=p5.x+xx*p5.z;
   p5.y=p5.y+yy*p5.z;
   p6.x=p6.x+xx*p6.z;
   p6.y=p6.y+yy*p6.z;
   p7.x=p7.x+xx*p7.z;
   p7.y=p7.y+yy*p7.z;
   p8.x=p8.x+xx*p8.z;
   p8.y=p8.y+yy*p8.z;

xx=xx*0;
yy=yy*0;

}

function keyReleased(){

    if (keyCode==UP_ARROW){
      yy-=0.1;
    }
    else if (keyCode == DOWN_ARROW){
      yy+=0.1;
		}

    else if (keyCode == LEFT_ARROW){
      xx-=0.1;
		}
    else if (keyCode == RIGHT_ARROW){
      xx+=0.1;
    }
    return false;

}

function mouseDragged(){
    rotY -=(mouseX - pmouseX) * 0.01;
    rotX -=(mouseY - pmouseY) * 0.01;
}


function axes() {

  strokeWeight(4);
  stroke(255, 0, 0);
  line(-1000, 0, 0, 1000, 0, 0);
  stroke(0, 255, 0);
  line(0, -1000, 0, 0, 1000, 0);
  stroke(0, 0, 255);
  line(0, 0, -1000, 0, 0, 1000);

}
