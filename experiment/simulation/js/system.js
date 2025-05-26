
class System  {
    constructor(x, y, _w, _h){
        this.width = _w;
        this.h = _h
        this.x_equilibrium = x;
        this.y_equilibrium = y;
        this.F0 = 0;
        this.w = 0;
        this.k1 = 0;
        this.k0 = 0;
        this.m1 = 0;
        this.k2 = 0;
        this.k3  = 0;
        this.m2 = 0;
        this.w1 =0;
        this.w2 =0;
        this.x1 = 0;
        this.x2 = 0;
        this.masscoordinates = [];
        this.x1w1 = 0;
        this.x2w1= 0;
        this.x2w1 = 0;
        this.x2w2 = 0;
        this.calcu1 = 0;
        this.calcu2 = 0;
        
    }

    initialise(_F0, _w,_m1 ,_k1 ,_m2 , _k2)  {

        //if(_w>3.8  && _w<4.1 || (_w> 2.4 && _w<=2.65) )_w= _w - 0.5
        
        
        this.F0 = _F0;
        this.w = _w;  
       
        this.m1 = _m1;
        this.k1 = _k1;
        this.m2 = _m2;
        this.k2 = _k2;
    //     this.denom= ((this.m1*this.m2*Math.pow(this.w,4))-((this.m1*this.k2+(this.m2*(this.k1+this.k2)))*Math.pow(this.w,2))+(this.k1*this.k2));
    //     this.x1 = (((this.k2 +this.k1-this.m2*Math.pow(this.w,2))*this.F0)/this.denom);
    //     this.x2 = ((this.k2*this.F0)/this.denom);
    //  //   console.log("the value of x1",this.x1);
    //   //  console.log("the value of x2" , this.x2);
    //     this.term1 = Math.pow((this.k1*this.m2+this.k2*this.m2+this.m1*this.k2)/(this.m1*this.m2),2);
    //     this.term2 = (this.k1*this.k2)/(this.m1*this.m2);
    //     this.term3 = (this.k1*this.m2+this.k2*this.m2+this.m1*this.k2)/(this.m1*this.m2);
    //     this.det = Math.pow(this.term1-4*this.term2,0.5);
        
    //     this.w1 = Math.pow((this.term3 + this.det)/2,0.5);
    //     this.w2 = Math.pow((this.term3 - this.det)/2,0.5);

    this.k0 = 0;
    this.denom= this.m1*this.m2*Math.pow(this.w ,4 ) - (this.m1*(this.k1  + this.k2) + this.m2*(this.k0+ this.k1))*Math.pow(this.w , 2)+ (this.k0*this.k1+ this.k0*this.k2 + this.k2*this.k1);
    this.x1 = -((this.k1+ this.k2 - this.m2*this.w*this.w)*this.F0)/this.denom;
    this.x2 = -((this.k1)*this.F0)/this.denom;
    this.w1 = Math.pow((this.k2/(this.m1)) , 0.5);
    this.w2 = Math.pow((this.k2 + 2*this.k1)/this.m1 , 0.5);
    // console.log("the value of denom , " , this.denom);
    // console.log("the value of x2" , this.x2);
    // console.log("the value of x1" , this.x1);
    // console.log("the value of w1 " , this.w1);
    // console.log("the value of w2" , this.w2);

     


    }

    update(t, _mulfact)  {
        //this.fi = atan((-2*this.z*this.w / this.wn) / (1 - (this.w*this.w)/(this.wn*this.wn)));
        this.t = t;
       // this.y = -15*Math.sin(t*this.w*10);
      
        //this.x =  15*Math.cos(t*this.w*10);
        this.y2 = -(_mulfact*this.x2* Math.sin(this.w*t*5));
        this.y1 = -(_mulfact*this.x1 * Math.sin(this.w*t*5));
         //  console.log("the value of y1 is" , this.y1);
         //  console.log("the value of y2 is " , this.y2);    
    }

    show(_stroke, _strockweight, _fill) {

  push();

  let wid = spr.width-35;
  let hei = spr.height-130;

  if(abs(this.w -this.w1)<=0.1 || abs(this.w - this.w2)<=0.1)
  {
    this.y1 = this.y1*10;
    this.y2= this.y2*10;
  }
  else{
  this.y1 = this.y1*10;
  this.y2 = this.y2*10;
  }
  let constant = 150;

  // spring
  image(spr, this.x_equilibrium - (wid/2)+10, constant+this.y_equilibrium -12.5 -hei-10 +this.y2+10 , wid, hei-this.y2+10);
  fill(0,0,0)
  textSize(15)
  //text("K1",this.x_equilibrium - (wid/2)-30, constant+this.y_equilibrium -12.5 -(hei/2) +this.y1+10)
  
  
  image(spr, this.x_equilibrium -(wid/2)-10,constant+ this.y_equilibrium -12.5-25 -(2*hei) + this.y1 -10-5-9, wid, hei-this.y1 + this.y2)
  image(spr, this.x_equilibrium -(wid/2)+30, constant+this.y_equilibrium -12.5-25 -(2*hei) + this.y1 -10-5-9, wid, hei-this.y1 + this.y2)
  //image(spr,this.x_equilibrium -(wid/2) ,this.y_equilibrium -(this.h/2) +this.y1 , this.width-20, this.h)
 
  fill(0,0,0)
  textSize(15)
  //text("K2",this.x_equilibrium -(wid/2)-30, this.y_equilibrium -12.5-25 -(1.5*hei) + this.y2 +10)

  // base
  rectMode(CENTER)
  fill(0,0,0)
  rect(this.x_equilibrium+10, constant+this.y_equilibrium, this.width+40, this.h-20)
  
  // mass
  rect()
  stroke(_stroke);
  strokeWeight(_strockweight);
  fill(_fill);
  rectMode(CENTER)
  fill(139,69,19);
  rect(this.x_equilibrium+10 ,constant+this.y_equilibrium -(this.h/2) -hei +this.y2 -(this.h/2) -12, this.width-20+10+20, this.h+25) // bottom mass
  fill(105,105,0)
  textSize(12)
  //text("m1",this.x_equilibrium-5+10 ,-10+this.y_equilibrium -(this.h/2) -hei +this.y1 -(this.h/2))

  rectMode(CENTER)
  fill(139,69,19);
  rect(this.x_equilibrium +10,constant+this.y_equilibrium -50 -(2*hei) +this.y1-15-10-12, this.width-20+10+20, this.h+25) // top mass
 // text("m2",this.x_equilibrium-80,250+this.y_equilibrium -50 -(2*hei) + this.y2-5)
  
  fill(255,255,255);
  textSize(12)
  
 
  ellipse(370+50 +40,constant+this.y_equilibrium -50 -(2*hei) +this.y1-15-20, 32, 32);
  //fill(255,0,255);
  //rect(this.x_equilibrium - this.width/2, this.y_equilibrium + this.y2 +this.h+50, this.width, this.h)
  
  let r = 10.6;
   

  //console.log("the value ofx,yi",this.x,this.y);
  let x = r * Math.sin( this.t*this.w*10 +10);
   let y = r * Math.cos( this.t*this.w*10 +10);


   fill(255, 0, 0);
   ellipse(460 +x  ,constant+this.y_equilibrium -50 -(2*hei) +this.y1-15-20 + y, 6, 6);



  pop();

  this.masscoordinates = [this.x_equilibrium ,this.y_equilibrium -(this.h/2) -hei +this.y1 -(this.h/2) +10, this.x_equilibrium ,this.y_equilibrium -50 -(2*hei)  +this.y2 +10]


}

    static mag_func1(x, obj)  {

        let mu = obj.m1/obj.m2;
        let temp1 = x;
        let temp2 = Math.pow(((obj.w2*x)/obj.w1),2);
        let denom = ((1+mu)*temp2) + Math.pow(temp1,2);
        
        let solution = (1-Math.pow(temp1,2)) / ((Math.pow(temp1,2)*temp2)-denom+1)
          
        if (abs(solution)<200){
            return(abs(solution));
        }
        else{
            return (200);
        }
         
        
    }
    static mag_func2(x, obj)  {
        let mu = obj.m1/obj.m2;
        let temp1 = x;
        let temp2 = Math.pow(((obj.w2*x**x)/obj.w1),2);
        let denom = ((1+mu)*temp2) +Math.pow(temp1,2);
        
        let solution = (1)/ ((Math.pow(temp1,2)*temp2)-denom+1);
        if (abs(solution)<200){
            return(abs(solution));
        }
        else {
            return (200);
        }
        
        
        
    }

    
}
