function runPage1() {
    background(255);
    image(bg, 0, 0)
    
    stroke(0);

    fill(0);
    push();
    textSize(30);
    textFont("Comic Sans MS");
    text('Motor on a Foundation  as 2DOF System ',200, 50);
    text('Forced Vibration with rotating unbalance' , 200 , 80);

    textSize(16);
    text("CONTROLS", 750, 540);
    text("VARIABLES", 730, 130);
    pop();

    push();
    stroke(0, 100);

    // for (let i = 20; i < 591; i++) {
    //     point(i, 480);
    //     i += 2;
    // }

    // for (let i = 480; i < 570; i++) {
    //     point(300, i);
    //     i += 2;
    // }
    pop();

    spring1.initialise(F0.inp,w.inp,m1.inp,k1.inp,m2.inp , k2.inp);
    spring1.update(t, factor);
    spring1.show(0, 1, 0);

    text("k1" , 550 , 350 + spring1.y1);
    text("k2" , 550 , 480 + spring1.y2);
    text("m1" , 330 , 320 + spring1.y1);
    text("m2" , 330 , 420 + spring1.y2);

    position_graph1.update(spring1.y1);
    position_graph1.draw(255, 0,0)

    position_graph2.update(spring1.y2);
    position_graph2.draw(255, 0, 0)

    strokeWeight(0)

    textSize(16);
    textFont("Comic Sans MS")
    fill(250, 114, 43);
    
    text('ω2 = ' + spring1.w2.toFixed(4) + " rad/s", 50, 690);
    text('ω1 = ' + spring1.w1.toFixed(4) + " rad/s", 50, 720);
    text('ω/ω2 = ' + (spring1.w/spring1.w2).toFixed(4) + " rad/s", 310, 720)
    text('ω/ω1 = ' + (spring1.w/spring1.w1).toFixed(4) + " rad/s", 310, 690)
   // text('X1/Xst = ' +  (abs(spring1.x1/(spring1.F0/spring1.k1))).toFixed(4) , 40, 720)
   // text('X2/Xst = ' + (spring1.w/spring1.w1).toFixed(4) + " rad/s", 310, 690)
    
    strokeWeight(0.5);   
    line(0, 650, 680, 650)
    line(300,650,300,750) 

  //  line (spring1.masscoordinates[0]+10, spring1.masscoordinates[1]+10, position_graph1.graphend[0]+10, position_graph1.graphend[1]+10)
   // line (spring1.masscoordinates[2]+10, spring1.masscoordinates[3]+10, position_graph2.graphend[0]+10, position_graph2.graphend[1]+10)

    //text('η = ' + (slider_ang_freq.inp / spring1.wn).toFixed(4), 310, 535);
    //text('z = ' + z.inp.toFixed(4), 310, 550);
    fill(0,0,0)
    textSize(20);
    text("FORCED VIBRATION SYSTEM", 115, 150);

    F0.draw();
    w.draw();
   // k0.draw();
    m1.draw();
    k1.draw();
    m2.draw();
    k2.draw();
    button1.draw();
    button2.draw();

    t = t + dt;
}
