
function loadImage(url) {
  return new Promise(r => { let i = new Image(); i.onload = (() => r(i)); i.src = url; });
}



window.onload = function (){

	alert('Essa é a primeira página de várias do jogo Descontinuação, um jogo em Javascript interativado usando canvas e data interna, esse é apenas o protótipo inicial da primeira página.');

		var canvas=document.getElementById("canvas");
var context=canvas.getContext('2d');
var image=new Image();
var desc =new Image();

function clear(){
	context.clearRect(0,0,canvas.widht,canvas.height);
}

	setInterval(function(){ 
		context.fillStyle = "rgba(255,255,255,0.5)";
		context.fillRect(0,0,canvas.widht,canvas.height);
	 }, 600);



	setInterval(function(){ 
image.onload=function(){
context.drawImage(image,0,0,canvas.width,canvas.height);
context.globalAlpha = 0.3;
context.drawImage(desc,200,-50,666,444);
context.globalAlpha = 0.1;
context.drawImage(desc,250,-30,666,444);


};	
	image.src="./desc.png";

	desc.src="./logo.png";

	var bd = document.getElementsByTagName("BODY")[0];
	var sl = document.getElementById("texting");
	sl.style.MozBorderRadius = '10em'; // mozilla
	bd.style.backgroundColor ="rgba("+(Math.floor(Math.random()*100))+","+(Math.floor(Math.random()*100))+","+(Math.floor(Math.random()*100))+",0.4)";
	context.fillStyle="rgba("+(Math.floor(Math.random()*200)+50)+","+(Math.floor(Math.random()*120)+100)+",0,0.4)";
	context.fillRect(580-Math.floor(Math.random()*50),100-Math.floor(Math.random()*50),Math.floor(Math.random()*300),Math.floor(Math.random()*300)); }, 50);


};