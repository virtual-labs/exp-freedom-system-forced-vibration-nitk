function runPage2() {
    background(255);
    image(bg, 0, 0);
    stroke(0);
    //fill(0);
   // fill(0);
    push();
    textSize(30);
    textFont("Comic Sans MS");
    fill(0);
    text('Motor on a Foundation  as 2DOF System ',200, 50);
    text('Forced Vibration with rotating unbalance' , 200 , 80);

    textSize(16);
    //fill(250, 114, 43);
    text("CONTROLS", 750, 540);
    text("VARIABLES", 730, 130);
    pop();
    
    textSize(16);
    textFont("Comic Sans MS")
    fill(250, 114, 43);

    text('Xst = ' + ((spring1.F0/spring1.k1)).toFixed(4) , 100, 710)
    text('X1 = ' + (abs(spring1.x1)).toFixed(4) , 100, 680)
    text('X2 = ' + (abs(spring1.x2)).toFixed(4) , 350 , 680)
    text('X1/X2 = '  + (spring1.x1/spring1.x2).toFixed(2) , 350 , 710)
    

    strokeWeight(0.5);   
    line(0, 650, 680, 650)
    line(300,650,300,750) 

    spring1.initialise(F0.inp,w.inp,m1.inp,k1.inp,m2.inp , k2.inp);
    spring1.update(t,factor)
    
   

        
    textFont("Comic Sans MS");
    textSize(20);
    text("MODE SHAPE", 215, 150);
    textSize(15);


    

    if(abs(spring1.w-spring1.w1)<=0.5 || abs(spring1.w - spring1.w2)<=0.5)
    {

    strokeWeight(1.5);
    //stroke(0);
    line(220,200,220,600);
    stroke(0,0,255);
    console.log("the  value of x1 in spring  1 " , spring1.x1);
    console.log("the value of  x2 in  spring 2 " , spring1.x2);
    line(220,300,220+(spring1.x1*200),300);
    line(220,500,220+(spring1.x2)*200,500);
    stroke(255,0,0);
    line(220,200,220+(spring1.x1*200),300);
    line(220+(spring1.x1*200),300,220+(spring1.x2*200),500);
    line(220+(spring1.x2)*200,500,220,600);
    }
    else{
    
    strokeWeight(1.5);
    //stroke(0);
    line(220,200,220,600);
   // stroke(0,0,255);
    console.log("the  value of x1 in spring  1 " , spring1.x1);
    console.log("the value of  x2 in  spring 2 " , spring1.x2);
    line(220,300,220+(spring1.x1*200),300);
    line(220,500,220+(spring1.x2*200),500);
    stroke(255,0,0);
    line(220,200,220+(spring1.x1*200),300);
    line(220+(spring1.x1*200),300,220+(spring1.x2*200),500);
    line(220+(spring1.x2*200),500,220,600);

    }

   
    if(abs(spring1.w-spring1.w2)<=0.1)
    {

        text("SECOND MODE SHAPE",215,180);
        text("X1/X2 = "  + (spring1.x1/spring1.x2).toFixed(0) , 300 , 300 );
    }

    if(abs(spring1.w-spring1.w1)<=0.1)
    {
        text("FIRST MODE SHAPE",215,180);
        text("X1/X2 = "  + (spring1.x1/spring1.x2).toFixed(0) , 300 , 300 );
    }
    

    button3.draw()
    button4.draw()

    F0.draw();
    w.draw();
   // k0.draw();
    m1.draw();
    k1.draw();
    m2.draw();
    k2.draw();
    t = t+dt;
   
}
