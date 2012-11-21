// JavaScript Document
document.body.style.overflow = 'hidden';
var pausefl = false;			// комментарий
var ANet = new Array();
var AEl = new Array(); 				//массив жуков
var as =new Array();                // массив для атаки мух
var vvq = 0;
var MaxAt = 3;						//максимальное колличество атак мух в один промежуток времени;
var MaxL = 3;						//предел жизней	
var nN = 0;							 //номер паутины)
var N = 22; 						//колличество мух
var m;
var x1 = 0;
var y1 = 700;
var x2 = 0;
var y2 = -51;
var iner;
var inter2;
var dir=0;
var points = 0;
var ex = true;
var zzz = document.getElementById("can1");
var zz=zzz.getContext("2d");
var Nfly = 20; //cскорость полета паутины
var w = can1.width;
var h = can1.height;
var checkFire = false;
var sInt = 25;
function NET()			// Паутина
{
	this.x = 0;
	this.y = 800;
	this.w = 50;
	this.h = 50;
	this.fl = false;
}
for(i=0;i<10;i++)		// заполнение массива паутин
{
	ANet[i] = new NET();
}
function beetle()
{
	this.x = 0;
	this.y = 0;
	this.w = 70;
	this.h = 70;
	this.fl = true;
}
function Speeder()    //паук
{
	this.x = 0;
	this.y = 700;
	this.w = 50;
	this.h = 50;
	this.life = MaxL;
}
var speeder = new Speeder();
for(i=0;i<N;i++)		// заполнение массива Жуков
{
AEl[i] = new beetle();
}
var sPl = false;
function PauseG()
{
	//alert(pausefl);
	if(pausefl == true)
		{
			inter = setInterval(Game,sInt);
			pausefl=false;
			inter2 = setInterval(atack,2000);
		}
	if(pausefl==false)
	{
		pausefl = true;
		clearInterval(inter);
		clearInterval(inter2);
		
	}
	
}

function Play(sPl)
{
	
	if(sPl==true)
	{	
		document.getElementById('menu');			
		menu.style.visibility = "hidden";
		document.onkeydown = function(e) 
		{
 			e = e || window.event;
  		 if (e.keyCode == 39&&  speeder.x < 1230) {dir = 1;}
		 	else{dir=0;}
	     if (e.keyCode == 37&& speeder.x > 0){dir = 2;}
	  		
		 if (e.keyCode == 32)
		  {
				while(ANet[nN].fl==true)
				{
					if(nN<9)
					{
						nN++;
					}
					else
					{
						nN = 0;
						
					}
				}
				ANet[nN].x = speeder.x;
				ANet[nN].y = speeder.y;	
				ANet[nN].fl = true;	
				points-=1;
				}
	return true;
}
		document.onkeyup = function(e)
		{
		   e=e||window.event;
		   dir = 0;
		}
		eliensO(N,0);
	
	
		inter = setInterval(Game,sInt);		
	function nFly()
	{
		for(i=0;i<10;i++)
		{	
			if(ANet[i].fl == true)
			{
			ANet[i].y-=20;
			}
			
		}	
			
			for(i=0;i<10;i++)
			{
				zz.fillRect(ANet[i].x,ANet[i].y,ANet[i].w,ANet[i].h);
				
			}
			
	} 
		 function Game()
	{		
	
	 	zz.clearRect(0,0,w,h);
		 nFly();
		 
		 check();
		 check1()
		 flyB();
		 statusBar()
		 zz.save();
		 eliens();		 
		 
		 zz.restore();
	if(dir==1)
		{
			 speeder.x+=30;
		}
	if(dir==2)
		{
			 speeder.x-=30;
		}  
	if(dir==0||speeder.x<0||speeder.x>1230)
		{
			 speeder.x=speeder.x;
		}  
			zz.save();
			zz.strokeStyle = '#f00';
			zz.strokeRect(speeder.x,speeder.y,50,50);
			zz.fillText(speeder.x,speeder.x+15,speeder.y+30);
			zz.restore();
			zz.beginPath();
			zz.strokeStyle = '#00f';
			zz.fill();
			zz.closePath();			
	}	
	 inter2 = setInterval(atack,2000);
	function check() 
	{		
	
	for(j=0;j<10;j++)
	{
		if(ANet[j].fl==true)
		{
		for(i=0;i<N;i++)
		{
			if(ANet[j].x>AEl[i].x-40 && ANet[j].x<AEl[i].x+60 && AEl[i].fl==true)
			{ 
				if(ANet[j].y<AEl[i].y+50 && AEl[i].fl==true)
				{	
					ANet[j].y=800;
					ANet[j].fl = false;
					AEl[i].fl = false;
					m = 0;
					for(i=0;i<N;i++)
					{
					if(AEl[i].fl == false)
						{
							m++;
						}
					}					
					 points+=11;
						if(m==0)
						{
							alert('!!You Win!!');
						}						 
				}				  
			}
		}
		}
		if((-50)>ANet[j].y)
		{
						ANet[j].y = 800;
						ANet[j].fl = false;
		}			
	}
	}
}

}

function eliens()
		{
			for(i=0;i<N;i++)
				{
					
					
				if(AEl[i].fl==true)
					{
						zz.strokeRect(AEl[i].x,AEl[i].y,70,70);
					}
				
				}			
		}
function eliensO(N1,lev)
{
	var v,z;
	if(N1>9)
	{
		v=100;
		z=10;
	}
	if(N1<10)
	{
		v = 1000/N1;
		z=N1;		
	}
	AEl[lev*10].x=v;
	AEl[lev*10].y=((lev+1)*100);
	for(i=1;i<z;i++)
	{
		AEl[i+(lev*10)].x=AEl[i-1+(lev*10)].x+v;
		AEl[i+(lev*10)].y=((lev+1)*100);
	}
	if(N1>10)
	{
		eliensO(N1-10,lev+1);
	}
}
function atack()
{
	zz.save();	
	do{
	var at = Math.round(((N-0)*Math.random()));
	}while(AEl[at].fl == false);
	zz.fillRect(AEl[at].x,AEl[at].y,70,70);
	as[vvq] = new NET();
	as[vvq].x=AEl[at].x;
	as[vvq].y=AEl[at].y;
	as[vvq].w=AEl[at].w;
	as[vvq].h=AEl[at].h;
	as[vvq].fl = true;
	vvq++;
	if(vvq==MaxAt)
	{vvq = 0;}
	
	zz.fillStyle = '#0f0';
	zz.restore();
}

function flyB()
{
	
	zz.save();
	zz.fillStyle = '#0f0';
	
  for(i = 0;i<as.length;i++)
  {
	  if(as[i].fl == true)
	  {
		  as[i].y+=15;
	 zz.fillRect(as[i].x,as[i].y,as[i].w,as[i].h)
	
	  }
	  }
  	zz.restore();
}
function check1()
{
	for(i = 0;i<as.length;i++)
  {
	  if(as[i].fl == true)
	  {
		  if(as[i].x > speeder.x-25 && as[i].x < speeder.x+25)
		  {
			  if(as[i].y >speeder.y-50 && as[i].y < speeder.y+100)
			  {
				  as[i].fl==false;
				  speeder.life -=1;
				  
				 // alert('i');
				  if(speeder.life==0)
				  {
					  clearInterval(inter);
					  clearInterval(inter2);
					  zz.save();
					  zz.fillStyle = '#f00';
					  zz.font = "150px Arial";
					  zz.fillText('GAME OVER',200,200);
					  
					  zz.restore();
				  }
			  }
		  }
		  if(as[i].y > 800)
		  {
			  //as[i].y = 0;
			  as[i].fl = false;
		  }
	  }
  }
	  
	 
}
function statusBar()
{
	 zz.save();
	 zz.fillStyle = '#00f';
		 zz.font = "50px Arial";
		 zz.fillText(points,50,50);	
		 x1 = 1200; 
		 for(i=0;i<speeder.life;i++)
		 {
			 
			 zz.fillRect(x1,50,10,50)
			 x1-=30;
		 }
		 zz.restore();
}