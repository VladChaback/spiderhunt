// JavaScript Document

document.body.style.overflow = 'hidden';
var netO = {x:0,y:700,w:0,h:0,speed:0,fl:0};
var netA = new Array();
netA = [netO,netO,netO,netO,netO,netO,netO,netO,netO,netO];
	var vvq = 0;	
var nN = 0; //номер паутины)
var N = 22; //колличество мух
var m;
var x1 = 0;
var y1 = 700;
var x2 = 0;
var y2 = -51;
var iner;
var iner1; // интервал для паутины
var dir=0;
var points = 0;
var ex = true;
var xE = new Array(); // Координаты Х для мух
var yE = new Array(); // Координаты Y для мух
var cD = new Array(); // Массив мух
var zzz = document.getElementById("can1");
var zz=zzz.getContext("2d");
var Nfly = 20; //cскорость полета паутины
var w = can1.width;
var h = can1.height;
var checkFire = false;
var sInt = 25;
for(i=0;i<N;i++)
{
	cD[i]=0;
}
var sPl = false;
function Play(sPl)
{
	if(sPl==true)
	{	
		document.getElementById('menu');			
		menu.style.visibility = "hidden";
		document.onkeydown = function(e) 
		{
 			e = e || window.event;
  		 if (e.keyCode == 39&&x1!=1230) {dir = 1;}
	     if (e.keyCode == 37&& x1!=0){dir = 2;}
	  	 if (e.keyCode == 32)
		  {
				Fire();
		  }
	return true;
}
		document.onkeyup = function(e)
		{
		   e=e||window.event;
		   dir = 0;
		}
		eliensO(N,0);
	
	function Fire()
	{
		clearInterval(inter);
		inter = setInterval(Game,sInt);
		if(netA[nN].fl==1)
		{
			nN+=1;
		if(nN>9)
		{nN=0;}
		}
		netA[nN].w = 50;
		netA[nN].h = 50;		
		netA[nN].y = y1;
		netA[nN].x = x1;
		netA[nN].fl = 1;
		points-=1;
		nN+=1;
	}
		inter = setInterval(Game,sInt);		
	function nFly()
	{
		zz.save();
		for(i=0;i<netA.length;i++)
		{
			if(netA[i].fl == 1)
			{
				netA[i].y -= Nfly;
			}
				zz.fillRect(netA[i].x,netA[i].y,netA[i].w,netA[i].h);
				check(netA[i].x,netA[i].y,i);					
			
		}
		zz.restore();		
	}
	
	 
	
		
		
		 
		 
		 function Game()
	{		
	
	 	zz.clearRect(0,0,w,h);
		
		//zz.fillRect(50,700,netA[1].w,netA[1].h);
		for(i=0;i<netA.length;i++)
		{
			if(netA[i].fl == 1)
			{
				netA[i].y -= Nfly;
			}
			vvq+=60;
				zz.fillRect(vvq,netA[i].y,netA[i].w,netA[i].h);
				check(netA[i].x,netA[i].y,i);					
			
		}
		 
		 nFly();
		 zz.save();
		 eliens();		 
		 zz.font = "50px Arial";
		 zz.fillText(points,50,50);	 
		 zz.restore();
	if(dir==1)
		{
			 x1+=30;
		}
	if(dir==2)
		{
			 x1-=30;
		}  
	if(dir==0||x1==0||x1==1230)
		{
			 x1=x1;
		}  
			zz.save();
			zz.strokeStyle = '#f00';
			zz.strokeRect(x1,y1,50,50);
			zz.fillText(x1,x1+15,y1+30);
			zz.restore();
			zz.beginPath();
			zz.strokeStyle = '#00f';
			zz.fill();
			zz.closePath();			
	}	
	setInterval(atack,1000);
	function check(x,y,nNn)
	{		
		for(i=0;i<N;i++)
		{
			if(x>xE[i]-40 && x<xE[i]+60 && cD[i]==0)
			{ 
				if(y<yE[i]+50 && cD[i]==0)
				{	
					netA[nNn].y=700;
					netA[nNn].fl = 0;
					cD[i]=1;
					m = 0;
					for(i=0;i<N;i++)
					{
					if(cD[i]==0)
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
		if((-50)>netA[nNn].y)
		{
						netA[nNn].y = 700;
						netA[nNn].fl = 0;
		}			
	}
}
}
function eliens()
		{
			for(i=0;i<N;i++)
				{
				if(cD[i]==0)
					{
						zz.strokeRect(xE[i],yE[i],70,70);
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
	xE[lev*10]=v;
	yE[lev*10]=((lev+1)*100);
	for(i=1;i<z;i++)
	{
		xE[i+(lev*10)]=xE[i-1+(lev*10)]+v;
		yE[i+(lev*10)]=((lev+1)*100);
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
	}while(cD[at] == 1);
	zz.fillRect(xE[at],yE[at],70,70);
	zz.fillStyle = '#0f0';
	zz.restore();
}
