// function runPage3() {
//   background(255);


//   stroke(0);
//   fill(0);



//   push();
//   stroke(0, 100);
//   for (let i = 20; i < 591; i++) {
//     point(i, 505);
//     i += 4;
//   }
//   for (let i = 510; i < 570; i++) {
//     point(300, i);
//     i += 4;
//   }
//   pop();

  
//   phaseAng.draw();

 
//   k = $("#stiffnessSpinner").spinner("value");
//   m = $("#massSpinner").spinner("value");
//   z = $("#dampingSpinner").spinner("value");
//   y = $("#magnitudeSpinner").spinner("value");
//   w = $("#frequencySpinner").spinner("value");

// }
function runPage3() {
  background(255);
  F0 = $("#stiffnessSpinner").spinner("value");
  w = $("#massSpinner").spinner("value");
  m1 = $("#dampingSpinner").spinner("value");
  k1 = $("#magnitudeSpinner").spinner("value");
  m2 = $("#frequencySpinner").spinner("value");
  k2 = $("#k2Spinner").spinner("value");
  console.log("hello");
  // image(bg, 0, 0);
  
  stroke(0);
  fill(0);

  fill(0);
  push();
  textSize(14);
  textFont("Comic Sans MS");
  text('Motor on a Foundation  as 2DOF System ',200, 50);
  text('Forced Vibration with rotating unbalance' , 200 , 80);


  textSize(14);
  text("CONTROLS", 750, 540);
  text("VARIABLES", 730, 130);
  pop();

  textSize(14);
  fill(250, 114, 43);
  strokeWeight(0);
  text('ω1 = ' + spring1.w2.toFixed(4) + " rad/s", 310, 680);
  text('ω2 = ' + spring1.w1.toFixed(4) + " rad/s", 480, 680);
  text('ω/ω2 = ' + (spring1.w/spring1.w1).toFixed(4) + " rad/s", 310, 720)
  
  text('X2/Xst = ' + (abs(spring1.x1/(spring1.F0/spring1.k1))).toFixed(4) , 100, 680)
  text('X2 = ' + (abs(spring1.x2)).toFixed(4) , 100, 710)
  text('Xst = ' + ((spring1.F0/spring1.k1)).toFixed(4) , 100, 740)

  strokeWeight(0.5);   
  line(0, 650, 680, 650)
  line(300,650,300,750) 
  spring1.initialise(F0.inp,w.inp,k1.inp,m1.inp,k2.inp,m2.inp);
  spring1.update(t, factor);
  //spring1.show(0, 1, 0);

 // magFac2.initialise();
 // magFac2.draw();


  
  stroke(255);
  fill(255);
  rect(30, 125, 550, 55);
  // button5.draw()
  
  // F0.draw();
  // w.draw();
  // k1.draw();

  // m1.draw();
  // k2.draw();
  // m2.draw();
  t = t+dt;
  //clear.mousePressed(clearMe);
}