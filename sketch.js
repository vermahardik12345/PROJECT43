//declaring variables
var hr,mn,sec;
var scangle,mnangle,hrangle;
var bed;

//creating function setup

    function setup() {
     //creating canvas
      createCanvas(800,400);
      //setting angle mode to degrees
      angleMode(DEGREES);
    }

function preload(){
  bed=loadImage("bed.png");
  
}

    //creating function draw

      function draw() {
       //setting background color
        background(bed); 
        //creating a rectangle so that we can display text of time on it 
        
        rect(60,350,255,75,20);
      
        //storing hour in h variable 
      
        h=hour();


        noStroke()
        fill("pink")
        textSize(50)

        //dispalying text for hour 
        text(h%12+":",90,400);

        //storing minute in m variable
          m=minute()
          noStroke()
          fill("pink")
          textSize(50)
          text(m+":",175, 400);
         
          //storing seconds in s variable
          s=second()
          noStroke()
          fill("pink")
          textSize(50)
          text( s,240, 400);
      
      
        translate(400,200);
        rotate(-90);
        hr=hour();
        mn=minute();
        sec=second();
        scangle=map(sec,0,60,0,360);
        mnangle=map(mn,0,60,0,360);
        hrangle=map(hr%12,0,12,0,360);

      push();
        rotate(scangle);
        stroke(0,255,0);
        strokeWeight(7);
        line(0,0,100,0);
        pop();

        push();
        rotate(mnangle);
        stroke(255,0,0);
        strokeWeight(7);
        line(0,0,100,0);
        pop();

        push();
        rotate(hrangle);
        stroke(0,0,255);
        strokeWeight(7);
        line(0,0,100,0);
        pop();


        stroke(255,30,150);
        point(0,0);
        strokeWeight(10);
        noFill();
        stroke(0,255,0);
        arc(0,0,300,300,0,scangle);
        stroke(255,0,0);
        arc(0,0,280,280,0,mnangle);
        stroke("blue");
        arc(0,0,260,260,0,hrangle);



      }