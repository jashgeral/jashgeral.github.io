const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 400;
    const rows = 40;
    const columns = 50;
    const scale = 10;
    var t = true;
    var c = 0;
    var img;
    const current = document.getElementById('cc');
    current.style.color = 'black';
window.onload = () => {
    let painting;

    function start(){
        painting = true;
    }
    function end(){
        painting = false;
    }
    function draw(e){
        document.getElementById('cords').innerHTML = "X; "+ Math.floor(e.clientX/scale) + " Y: "+Math.floor(e.clientY/scale);
        if(!painting) return;
        ctx.fillRect(Math.floor(e.clientX/scale)*scale,Math.floor(e.clientY/scale)*scale,scale,scale);
    }
    var cor;
    function key(e){
        if(t){
        if(e.key == 'z'){
        	cor = prompt("Escreva o código da cor:",cor);
        	current.style.color = cor;
        	ctx.fillStyle = cor;
        }
        if(e.key == 'e'){
        	cor = "#ffffff";
        	ctx.fillStyle = cor;
        	current.style.color = cor;
        }
        if(e.key == ' '){
            if(c<3){
                c++;
                switch(c){
                    case 1:
                    	cor = "#ff0000";
                        ctx.fillStyle= cor;
                        current.style.color = cor;
                        break;
                    case 2:
                    	cor = "#00ff00";
                        ctx.fillStyle= cor;
                        current.style.color = cor;
                        break;
                    case 3:
                    	cor = "#0000ff";
                        ctx.fillStyle= cor;
                        current.style.color = cor;
                        break;
                }
            }else{
                ctx.fillStyle="#000000";
                c=0;
            }
        }
        if(e.key=='c'){
            ctx.clearRect(0,0,canvas.width,canvas.height);
        }
        if(e.key == 'Enter'){
            var link = document.getElementById('link');
  link.setAttribute('download', 'canvas.png');
  link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  link.click();
        }
        t = false;
        }
    }
    function keyup(e){
        t = true;
    }
    window.addEventListener('mousedown', start);
    window.addEventListener('mouseup', end);
    window.addEventListener('mousemove', draw);
    window.addEventListener('keydown',key)
    window.addEventListener('keyup',keyup)
}