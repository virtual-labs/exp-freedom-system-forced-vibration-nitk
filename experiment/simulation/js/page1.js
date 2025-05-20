
function runPage1() {
  background(255);
  // image(bg, 0, 0)
  
  stroke(0);

  fill(0);
  push();
  // textSize(30);
  // textFont("Comic Sans MS");
  // text('Motor on a Foundation  as 2DOF System ',200, 50);
  // text('Forced Vibration with rotating unbalance' , 200 , 80);

  // textSize(16);
  // text("CONTROLS", 750, 540);
  // text("VARIABLES", 730, 130);
  // pop();

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
  F0 = $("#stiffnessSpinner").spinner("value");
  w = $("#massSpinner").spinner("value");
  m1 = $("#dampingSpinner").spinner("value");
  k1 = $("#magnitudeSpinner").spinner("value");
  m2 = $("#frequencySpinner").spinner("value");
  k2 = $("#k2Spinner").spinner("value");
  spring1.initialise(F0,w,m1,k1,m2 , k2);
  spring1.update(t, factor);
  spring1.show(0, 1, 0);

  text("k\u2081" , 500 , 250 + spring1.y1);
  text("k\u2082" , 500 , 350 + spring1.y2);
  text("m\u2081" , 380 , 220 + spring1.y1);
  text("m\u2082" , 380 , 320 + spring1.y2);

  position_graph1.update(spring1.y2);
  position_graph1.draw(255, 0,0)

  position_graph2.update(spring1.y1);
  position_graph2.draw(255, 0, 0)

  strokeWeight(0)

  textSize(16);
  textFont("'Nunito', sans-serif ");
  fill(250, 114, 43);
  
//   text('ω2 = ' + spring1.w2.toFixed(4) + " rad/s", 50, 690);
//   text('ω1 = ' + spring1.w1.toFixed(4) + " rad/s", 50, 720);
//   text('ω/ω2 = ' + (spring1.w/spring1.w2).toFixed(4) + " rad/s", 310, 720)
//   text('ω/ω1 = ' + (spring1.w/spring1.w1).toFixed(4) + " rad/s", 310, 690)
//  text('X1/Xst = ' +  (abs(spring1.x1/(spring1.F0/spring1.k1))).toFixed(4) , 40, 720)
//  text('X2/Xst = ' + (spring1.w/spring1.w1).toFixed(4) + " rad/s", 310, 690)
document.getElementById("wd").textContent=spring1.w1.toFixed(4);
    document.getElementById("wn").textContent=spring1.w2.toFixed(4);
    document.getElementById("ww1").textContent=(spring1.w / spring1.w1).toFixed(4)
    document.getElementById("wn1").textContent=(spring1.w / spring1.w2).toFixed(4)
    document.getElementById("x1").textContent= abs(spring1.x1).toFixed(4);
    document.getElementById("x2").textContent= abs(spring1.x2).toFixed(4);
    document.getElementById("xst").textContent= (spring1.F0 / spring1.k1).toFixed(4),
    document.getElementById("x1st").textContent= ((spring1.x1/spring1.x2)).toFixed(2),
    // document.getElementById("x2st").textContent= abs(spring1.x1 / (spring1.F0 / spring1.k1)).toFixed(4),

// document.getElementById("x2st").textContent= abs(spring1.x1 / (spring1.F0 / spring1.k1)).toFixed(4),

// strokeWeight(0.5);   
  // line(0, 650, 680, 650)
  // line(300,650,300,750) 

//  line (spring1.masscoordinates[0]+10, spring1.masscoordinates[1]+10, position_graph1.graphend[0]+10, position_graph1.graphend[1]+10)
 // line (spring1.masscoordinates[2]+10, spring1.masscoordinates[3]+10, position_graph2.graphend[0]+10, position_graph2.graphend[1]+10)

  //text('η = ' + (slider_ang_freq / spring1.wn).toFixed(4), 310, 535);
  //text('z = ' + z.toFixed(4), 310, 550);
  fill(0,0,0)
  textSize(20);
  strokeWeight(0.5);
  textFont("'Nunito', sans-serif ");
  text("FORCED VIBRATION SYSTEM", 190, 90);
  if(abs(spring1.w-spring1.w1)<=0.5 || abs(spring1.w - spring1.w2)<=0.5)
    {

    strokeWeight(2);
    //stroke(0);
    // line(300,150,300,430);
    // stroke(0,0,255);
    
    // line(300,250,300+(spring1.x1*400),250);
    // line(300,350,300+(spring1.x2)*400,350);
    // console.log(spring1.x1*400);

    // stroke(255,0,0);
    // line(300,150,300+(spring1.x1*400),250);
    // line(300+(spring1.x1*400),250,300+(spring1.x2*400),350);
    // line(300+(spring1.x2)*400,350,300,430);
    
    if((spring1.x1*400)< -300 ||(spring1.x1*400)>300||(spring1.x2*400) < -300 ||(spring1.x2*400) > 300){
        // fill(0);
        console.log(spring1.x1);
        textSize(16);
        strokeWeight(0.8); 
        stroke(0,0,0);  
        text("Warning: The solution goes out of bounds as it's reaching the resonance",25,444);
    }

    }
    else{
    
  //   strokeWeight(2);
  //   stroke(0);
  //   line(300,150,300,430);
  //  stroke(0,0,255);
  //   // console.log("the  value of x1 in spring  1 " , spring1.x1);
  //   // console.log("the value of  x2 in  spring 2 " , spring1.x2);
  //   line(300,250,300+(spring1.x1*400),250);
  //   line(300,350,300+(spring1.x2*400),350);
  //   stroke(255,0,0);
  //   line(300,150,300+(spring1.x1*400),250);
  //   line(300+(spring1.x1*400),250,300+(spring1.x2*400),350);
  //   line(300+(spring1.x2*400),350,300,430);
    if((spring1.x1*400)< -300 ||(spring1.x1*400)>300||(spring1.x2*400) < -300 ||(spring1.x2*400) > 300){
        // fill(0);
        console.log(spring1.x1);
        textSize(16);
        strokeWeight(0.8); 
        stroke(0,0,0);  
        text("Warning: The solution goes out of bounds as it's reaching the resonance",25,444);
    }
    }
//   F0.draw();
//   w.draw();
//  // k0.draw();
//   m1.draw();
//   k1.draw();
//   m2.draw();
//   k2.draw();
  
  // button1.draw();
  // button2.draw();

  t = t + dt;
}
