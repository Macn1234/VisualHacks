float rotX, rotY;
ArrayList<PVector> vertices;


float yy;
float xx;
color c;

PVector p1,p2,p3,p4,p5,p6,p7,p8;
  
FloatList v= new FloatList();


void setup(){

   vertices = new ArrayList<PVector>();
    v.append(200);
    v.append(0);
    size(800, 800, P3D);
    
    p1=new PVector(0,0,0);
    p2=new PVector(200,0,0);
    p3=new PVector(200,-200,0);
    p4=new PVector(0,-200,0);
    p5=new PVector(0,0,200);
    p6=new PVector(200,0,200);
    p7=new PVector(200,-200,200);
    p8=new PVector(0,-200,200);
    
    c = color(81,214,214,50);
}

void draw(){  
   background(50);
    
   
   fill(c);
   stroke(#115299);
   strokeWeight(3);
   
   translate(width/2, height/2);
   
   camera(500, -500, 500, 0, 0, 0.0, 
       0.0, 1.0, 0.0);
       
       
   rotateX(rotX);
   rotateY(-rotY); 
   axes();
   pushMatrix();
   
   applyMatrix(1, 0, xx, 0, 
              0, 1, yy, 0, 
              0, 0, 1, 0, 
              0, 0, 0, 1);
   
  
   beginShape();
   vertex(p1.x,p1.y,p1.z); 
   vertex(p2.x,p2.y,p2.z); 
   vertex(p3.x,p3.y,p3.z); 
   vertex(p4.x,p4.y,p4.z); 
   endShape();
   
   beginShape();
   vertex(p5.x,p5.y,p5.z); 
   vertex(p6.x,p6.y,p6.z); 
   vertex(p7.x,p7.y,p7.z); 
   vertex(p8.x,p8.y,p8.z); 
   endShape();
   
   beginShape();
   vertex(p1.x,p1.y,p1.z); 
   vertex(p4.x,p4.y,p4.z); 
   vertex(p8.x,p8.y,p8.z); 
   vertex(p5.x,p5.y,p5.z); 
   endShape();
   
   
   beginShape();
   vertex(p2.x,p2.y,p2.z); 
   vertex(p3.x,p3.y,p3.z); 
   vertex(p7.x,p7.y,p7.z); 
   vertex(p6.x,p6.y,p6.z); 
   endShape();
   
   
   beginShape();
   vertex(p1.x,p1.y,p1.z); 
   vertex(p2.x,p2.y,p2.z); 
   vertex(p6.x,p6.y,p6.z); 
   vertex(p5.x,p5.y,p5.z); 
   endShape();
    
    
   beginShape();
   vertex(p3.x,p3.y,p3.z); 
   vertex(p4.x,p4.y,p4.z); 
   vertex(p8.x,p8.y,p8.z); 
   vertex(p7.x,p7.y,p7.z); 
   endShape();
    
    
    
    
    popMatrix();
  
}

void keyPressed() {
 
    if (key == 'w'){
      xx+=0.1f;
    }
    else if (key == 's')
      xx-=0.1;
    
    else if (key == 'a')
      yy-=0.1;
    else if (key == 'd')
      yy+=0.1;

  
  
}

void mouseDragged(){
    rotY -= (mouseX - pmouseX) * 0.01;
    rotX -= (mouseY - pmouseY) * 0.01;
}



void axes() {
  pushStyle();
  strokeWeight(4);
  stroke(255, 0, 0);
  line(-1000, 0, 0, 1000, 0, 0);
  stroke(0, 255, 0);
  line(0, -1000, 0, 0, 1000, 0);
  stroke(0, 0, 255);
  line(0, 0, -1000, 0, 0, 1000);
    
  
  popStyle();
}