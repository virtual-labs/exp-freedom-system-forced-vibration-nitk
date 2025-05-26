

function simstate() {
    var imgfilename = document.getElementById("playpausebutton").src;
    imgfilename = imgfilename.substring(
      imgfilename.lastIndexOf("/") + 1,
      imgfilename.lastIndexOf(".")
    );
  
    if (animation) {
      noLoop();
      animation = false;
      document.getElementById("playpausebutton").src = "images/blueplaydull.svg";
      document.querySelector(".playPause").textContent = "Play";
      simstatus=0;
      // screenchangePhase();
    } else {
      loop();
      animation = true;
      document.getElementById("playpausebutton").src = "images/bluepausedull.svg";
      document.querySelector(".playPause").textContent = "Pause";
      simstatus=1;
    }
  }
  function graphPlot() {
    // loop();
    graphStep = 1;
    page1=false;
    page2=true;
    runPage2();
    document.querySelector(".graph-one").classList.remove("display-hide");
    // document.querySelector(".graph-two").classList.remove("display-hide");
    document.querySelector(".graph-div span").textContent = "Prev";
    // document.querySelector(".graph-div span").setAttribute("title", "Prev");
    document.querySelector(".graph-button").style.display = "none";
    screenchangePhase();
    // phaseAngleGraph();
    // magnitudeGraph();
  }
  
  function screenchangePhase() {
    // document.getElementById("cleargraph").style.visibility = "visible";
    // $('#playpausebutton').css({
    //     "opacity":0.5,
        
    //     // "pointer-events":"none"
    //   });
    // spring1.update(t, factor);
    phaseAngleGraph();
  }
  
  function screenchangeMag() {
    magnitudeGraph();
    
    graphStep += 1;
    // document.getElementById("cleargraph").style.visibility = "visible";
    // document.querySelector(".graph-two").classList.add("display-hide");
    document.querySelector(".graph-div span").textContent = "Prev";
  }

  function screenChangePrevious() {
    // $('#playpausebutton').css({
    //     "opacity":1,
        
    //     // "pointer-events":"none"
    //   });
      document.querySelector(".graph-div span").textContent = "";
      document.querySelector(".graph-button").style.display = "flex";
      document.querySelector(".graph-one").classList.add("display-hide");
    
      page1 = true;
      page2 = false;
      runPage1();
    //   document.getElementById("cleargraph").style.visibility = "hidden";
  
      document.querySelector(".graph-zero").classList.remove("display-hide");
      document.querySelector(".graph-button span").textContent = "Next";
      
      document.querySelector(".graph-div").classList.add("display-hide");
    // }
  }
  function phaseAngleGraph() {
    // resetGraphs();
    page1 = false;
    page2 = true;
  
    // document.getElementById("cleargraph").style.visibility = "visible";
    // magFac.initialise();
    // phaseAng.initialise();
  }
  
  function magnitudeGraph() {
    resetGraphs();
    page1 = false;
    page2 = true;

  
    magFac.initialise();
    // phaseAng.initialise();
  }



// canvas
let width = 600;
let height = 450;


// counter
let t = 0.05;
let dt = 0.01;

// system
let spring1;
let spring2;

// graphs
// let position_graph1;
// let position_graph2;
let magFac;

let k1;
let k2;
let m1;
let m2;
// let w;
let F0;

// factor
let factor = 10;

// images
let img;
let button1;
let button2;
let button3;
let button4;
let button5;
let spr;

// pages
let page1 = true;
let page2 = false;
let page3 = false;

// animation
let animation = true;
let touch = false;

// Buttons
let clear;

function preload() {
    // play = loadImage("images/blueplaydull.png");
    // pause = loadImage("images/bluepausedull.png");
    // graph = loadImage("images/graphbutton.png");
    // back = loadImage("images/bluebkdulls.png");
    // bg = loadImage("images/frame_copper_ver02.png");
    spr = loadImage("images/spring.png");
    
}

function setup() {
    textFont("Comic Sans MS");
    
    var sketchCanvas =createCanvas(600, 450);
    sketchCanvas.parent("canvas-container");
    // bg.resize(width +100 , height+180);
    
    spring1 = new System(450, 240, 90, 25);
   // spring2 = new System(450 ,365 , 90  ,25);

   strokeWeight(2);
    position_graph1 = new Graph(50, 350, 100, 220, "x\u2082", "t");

    position_graph2 = new Graph(50, 200, 100, 220, "x\u2081", "t");

    magFac1 = new DynamicGraph(50+20, 400+50, 300, 220, "X\u2081/Xst", "ω/ω\u2082", 0,7,0,10, System.mag_func1);
    magFac2 = new DynamicGraph(50+20, 400+50, 300, 220, "X\u2082/Xst", "ω/ω\u2082",0, 7,0,10, System.mag_func2);
    varinit();
    F0 = $("#stiffnessSpinner").spinner("value");
    w = $("#massSpinner").spinner("value");
    m1 = $("#dampingSpinner").spinner("value");
    k1 = $("#magnitudeSpinner").spinner("value");
    m2 = $("#frequencySpinner").spinner("value");
    k2 = $("#k2Spinner").spinner("value");
    //magFac = new DynamicGraph(125, 325, 230, 290, "Magnification Factor", "n", 0, 2.5, 0, 7.5, System.mag_func);
    //phaseAng = new DynamicGraph(125, 495, 150, 290, "Phase Angle", "n", 0, 2.5, 0, 180, System.phase_func);

//     F0 = new NumberInput(700, 180+20, "F(N)", 100,200, 150, 1,1, true);
//     w= new NumberInput(700, 230+20, "ω(rad/s)", 2.2, 5, 2.8, 0.1,1, true);
//    // k0 = new NumberInput(700, 270+30, "k0 (N/m)", 1000, 2000, 2000, 100,1, true);
//     m1 = new NumberInput(700, 310, "m1(kg)", 100,200 ,200, 10,1, true);
//     k1 = new NumberInput(700, 350+10, "k1 (N/m)", 1000, 2000, 2000, 100,1, true);
//     m2 = new NumberInput(700, 430, "m2(kg)", 200, 10000, 200, 10,0.1, true);
//     k2 = new NumberInput(700, 485, "k2 (N/m)", 2000, 12000, 2000, 100,1, true);
    // button1 = new Button(725, 600, pause);
    // button2 = new Button(790, 600, graph);
    // button3 = new Button(725,600,back);
    // button4 = new Button(790, 600, graph);
    // button5 = new Button(725,600,back);
    
    
}

function draw() {
    if (page1) {
        runPage1();
    }

    if (page2) {
        runPage2();
    }

    if (page3){
        runPage3();
    }
}

// function mousePressed() {
//   //  console.log(mouseX, mouseY)
//     handleEvents();
// }
