// canvas
let width = 800;
let height = 600;


// counter
let t = 0.05;
let dt = 0.01;

// system
let spring1;
let spring2;

// graphs
let position_graph1;
let position_graph2;
let magFac;

let k1;
let k2;
let m1;
let m2;
let w;
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
    play = loadImage("images/blueplaydull.png");
    pause = loadImage("images/bluepausedull.png");
    graph = loadImage("images/graphbutton.png");
    back = loadImage("images/bluebkdulls.png");
    bg = loadImage("images/frame_copper_ver02.png");
    spr = loadImage("images/spring.png");
    
}

function setup() {
    textFont("Comic Sans MS");
    
    createCanvas(width+ 100, height+180);
    bg.resize(width +100 , height+180);
    
    spring1 = new System(450, 365, 90, 25);
   // spring2 = new System(450 ,365 , 90  ,25);

    position_graph1 = new Graph(50, 500, 100, 220, "x2", "t");

    position_graph2 = new Graph(50, 300, 100, 220, "x1", "t");

    magFac1 = new DynamicGraph(50+20, 400+50, 300, 220, "X1/Xst", "ω/ω2", 0,7,0,10, System.mag_func1);
    magFac2 = new DynamicGraph(50+20, 400+50, 300, 220, "X2/Xst", "ω/ω2",0, 7,0,10, System.mag_func2);

    //magFac = new DynamicGraph(125, 325, 230, 290, "Magnification Factor", "n", 0, 2.5, 0, 7.5, System.mag_func);
    //phaseAng = new DynamicGraph(125, 495, 150, 290, "Phase Angle", "n", 0, 2.5, 0, 180, System.phase_func);

    F0 = new NumberInput(700, 180+20, "F(N)", 100,200, 150, 1,1, true);
    w= new NumberInput(700, 230+20, "ω(rad/sec)", 1, 150, 2.8, 0.01,0.01, true);
   // k0 = new NumberInput(700, 270+30, "k0 (N/m)", 1000, 2000, 2000, 100,1, true);
    m1 = new NumberInput(700, 310, "m1(kg)", 100,200 ,200, 10,1, true);
    k1 = new NumberInput(700, 350+10, "k1 (N/m)", 1000, 2000, 2000, 100,1, true);
    m2 = new NumberInput(700, 430, "m2(kg)", 200, 10000, 200, 10,0.1, true);
    k2 = new NumberInput(700, 485, "k2 (N/m)", 2000, 12000, 2000, 100,1, true);
    button1 = new Button(725, 600, pause);
    button2 = new Button(790, 600, graph);
    button3 = new Button(725,600,back);
    button4 = new Button(790, 600, graph);
    button5 = new Button(725,600,back);
    
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

function mousePressed() {
  //  console.log(mouseX, mouseY)
    handleEvents();
}
