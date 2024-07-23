function clearMe() {
    magFac.graphs = [];
    phaseAng.graphs = [];
    magFac.initialise();
    phaseAng.initialise();
}

// function runPage2() {
//     background(255);


//     stroke(0);
//     fill(0);



//     push();
//     stroke(0, 100);
//     for (let i = 20; i < 591; i++) {
//         point(i, 505);
//         i += 4;
//     }
//     for (let i = 510; i < 570; i++) {
//         point(300, i);
//         i += 4;
//     }
//     pop();

   

//     magFac.draw();
//     phaseAng.draw();


//     k = $("#stiffnessSpinner").spinner("value");
//     m = $("#massSpinner").spinner("value");
//     z = $("#dampingSpinner").spinner("value");
//     y = $("#magnitudeSpinner").spinner("value");
//     w = $("#frequencySpinner").spinner("value");
//     position_graph.update(spring1.y);
// //   position_graph.draw(0, 0, 255);
//   document.querySelector("#mass").textContent =
//   spring1.wn.toFixed(4) + " rad/s"; //Displaying values
// document.querySelector("#k").textContent = (w / spring1.wn).toFixed(4);
// document.querySelector("#c").textContent = z.toFixed(4);
// }
function runPage2() {
    background(255);
    // image(bg, 0, 0);
    strokeWeight(0)
    //fill(0);
   // fill(0);
    push();
    textSize(14);
    textFont("'Nunito', sans-serif ");
  
    fill(0,0,0)
    stroke(0,0,0);
    strokeWeight(0.8);
    text('Motor on a Foundation  as 2DOF System ',180, 30);
    text('Forced Vibration with rotating unbalance' , 180 , 50);

    textSize(16);
    //fill(250, 114, 43);
    // text("CONTROLS", 750, 540);
    // text("VARIABLES", 730, 130);
    pop();
    
    // textSize(16);
    // textFont("Comic Sans MS")
    // fill(250, 114, 43);

    // text('Xst = ' + ((spring1.F0/spring1.k1)).toFixed(4) , 100, 710)
    // text('X1 = ' + (abs(spring1.x1)).toFixed(4) , 100, 680)
    // text('X2 = ' + (abs(spring1.x2)).toFixed(4) , 350 , 680)
    // text('X1/X2 = '  + (spring1.x1/spring1.x2).toFixed(2) , 350 , 710)
    document.getElementById("wd").textContent=spring1.w1.toFixed(4);
    document.getElementById("wn").textContent=spring1.w2.toFixed(4);
    document.getElementById("ww1").textContent=(spring1.w / spring1.w1).toFixed(4)
    document.getElementById("wn1").textContent=(spring1.w / spring1.w2).toFixed(4)
    document.getElementById("x1").textContent= abs(spring1.x1).toFixed(4);
    document.getElementById("x2").textContent= abs(spring1.x2).toFixed(4);
    document.getElementById("xst").textContent= (spring1.F0 / spring1.k1).toFixed(4),
    document.getElementById("x1st").textContent= ((spring1.x1/spring1.x2)).toFixed(2),
    // document.getElementById("x2st").textContent= abs(spring1.x1 / (spring1.F0 / spring1.k1)).toFixed(4),

    
    F0 = $("#stiffnessSpinner").spinner("value");
    w = $("#massSpinner").spinner("value");
    m1 = $("#dampingSpinner").spinner("value");
    k1 = $("#magnitudeSpinner").spinner("value");
    m2 = $("#frequencySpinner").spinner("value");
    k2 = $("#k2Spinner").spinner("value");
    spring1.initialise(F0,w,m1,k1,m2 , k2);
    spring1.update(t,factor)
    
    var sketchCanvas;

        
    textFont("'Nunito', sans-serif ");
    textSize(16);
    strokeWeight(0.5);
    stroke(0,0,0);
    text("MODE SHAPE", 255, 100);
    textSize(15);
    strokeWeight(1); 
    stroke(0,0,0);  
    line(200, 250, 430, 250)
   
    line(200, 350, 430, 350)
    // line(300,650,300,750)
    textSize(14);
    fill(0);
    text("X\u2081", 180, 255);
    text("X\u2082", 180, 355);

    if(abs(spring1.w-spring1.w1)<=0.5 || abs(spring1.w - spring1.w2)<=0.5)
    {

    strokeWeight(2);
    //stroke(0);
    line(300,150,300,430);
    stroke(0,0,255);
    
    line(300,250,300+(spring1.x1*400),250);
    line(300,350,300+(spring1.x2)*400,350);
    console.log(spring1.x1*400);

    stroke(255,0,0);
    line(300,150,300+(spring1.x1*400),250);
    line(300+(spring1.x1*400),250,300+(spring1.x2*400),350);
    line(300+(spring1.x2)*400,350,300,430);
    
    if((spring1.x1*400)< -300 ||(spring1.x1*400)>300||(spring1.x2*400) < -300 ||(spring1.x2*400) > 300){
        // fill(0);
        console.log(spring1.x1);
        textSize(10);
        strokeWeight(0.8); 
        stroke(0,0,0);  
        text("Warning: The solution goes out of bounds as it's reaching the resonance",125,444);
    }

    }
    else{
    
    strokeWeight(2);
    stroke(0);
    line(300,150,300,430);
   stroke(0,0,255);
    // console.log("the  value of x1 in spring  1 " , spring1.x1);
    // console.log("the value of  x2 in  spring 2 " , spring1.x2);
    line(300,250,300+(spring1.x1*400),250);
    line(300,350,300+(spring1.x2*400),350);
    stroke(255,0,0);
    line(300,150,300+(spring1.x1*400),250);
    line(300+(spring1.x1*400),250,300+(spring1.x2*400),350);
    line(300+(spring1.x2*400),350,300,430);
    if((spring1.x1*400)< -300 ||(spring1.x1*400)>300||(spring1.x2*400) < -300 ||(spring1.x2*400) > 300){
        // fill(0);
        console.log(spring1.x1);
        textSize(16);
        strokeWeight(0.8); 
        stroke(0,0,0);  
        text("Warning: The solution goes out of bounds as it's reaching the resonance",25,444);
    }
    }

   
    if(abs(spring1.w-spring1.w2)<=0.1)
    {
        strokeWeight(0.8);
        textSize(10);
        stroke(0,0,0); 
        fill('black');
        text("SECOND MODE SHAPE",260,120);
        text("X\u2081/X\u2082 = "  + (spring1.x1/spring1.x2).toFixed(0) , 350 , 240 );
    }

    if(abs(spring1.w-spring1.w1)<=0.1)
    {
        strokeWeight(0.8);
        textSize(10);
        stroke(0,0,0);
        fill('black'); 
        text("FIRST MODE SHAPE",260,120);
        text("X\u2081/X\u2082 = "  + (spring1.x1/spring1.x2).toFixed(0) , 350 , 240 );
    }
    

    // button3.draw()
    // button4.draw()

//     F0.draw();
//     w.draw();
//    // k0.draw();
//     m1.draw();
//     k1.draw();
//     m2.draw();
//     k2.draw();
    t = t+dt;
   
}
