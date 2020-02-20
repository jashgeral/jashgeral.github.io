const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scale = 10;
ctx.font = "10px Georgia";
const box = new Image(10,10);

box.src = './box.png';

const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;
var blocks = [];
var run = true;

	class Block {
    constructor(x,y,){
        this.x = x;
        this.y = y;
    }

    draw(ctx){
        ctx.fillStyle ='#ff0000';
        ctx.fillRect(this.x*scale,this.y*scale,scale,scale);
    }

    update(){
    }


}

		class Snake {
    constructor(){
        this.x = 6;
        this.y = 5;
        this.yspeed = 0;
        this.xspeed = 0;
        this.counter = 0;
        this.run = true;
        this.face = 'down';
    }

    draw(ctx){
        ctx.fillStyle ='#10ff00';
        ctx.fillRect(this.x*10,this.y*10,scale,scale);
        ctx.fillStyle ='rgba(255,255,255,0.2)';
        switch(this.face){
            case 'down':
                ctx.fillRect(this.x*10,(this.y+1)*10,scale,scale);

                break;
            case 'up':
                ctx.fillRect(this.x*10,(this.y-1)*10,scale,scale);

                break;
            case 'left':
                ctx.fillRect((this.x-1)*10,this.y*10,scale,scale);

                break;
            case 'right':
                ctx.fillRect((this.x+1)*10,this.y*10,scale,scale);
                break;
        }
    }

    update(blocks){

    }



}

function newb(x,y){
    blocks.push(new Block(x,y));
}

(function setup(){
    snake = new Snake();
    snake.draw(ctx);
    for(let i = 0;i<10;i++){
        newb(i,i);
    }

    window.setInterval(() =>{
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(box,150,150);
        ctx.fillText("X: " + snake.x + "Y: "+snake.y, 200,10);
        blocks.forEach((item,index)=>{
            blocks[index].draw(ctx);
        });
        snake.draw(ctx);
    }, 250);
})();


window.addEventListener('keydown',(evt) => {
    switch(evt.key){
        case 'ArrowDown':
            snake.face = 'down';
            blocks.forEach((item,index) =>{
                if(snake.y+1==item.y&&snake.x==item.x){console.log('collide');run=false;}});
                if(run){
                    snake.y = snake.y+1;
                    run = false;
                }
            break;
        case 'ArrowUp':
            snake.face = 'up';
            blocks.forEach((item,index) =>{
                if(snake.y-1==item.y&&snake.x==item.x){console.log('collide');run=false;}
            })
            if(run){
                snake.y = snake.y-1;
                run = false;
            }
                break;
        case 'ArrowLeft':
            snake.face = 'left';
            blocks.forEach((item,index) =>{
                if(snake.x-1==item.x&&snake.y==item.y){console.log('collide');run=false;}
            });
            if(run){
                snake.x = snake.x-1;
                run = false;
            }
                    break;
        case 'ArrowRight':
            snake.face = 'right';
            blocks.forEach((item,index) =>{
                if(snake.x+1==item.x&&snake.y==item.y){console.log('collide');run=false;}
            })
            if(run){
                snake.x = snake.x+1;
                run = false;
            }
                        break;
    }
});



window.addEventListener('keyup',(evt) =>{
    if(evt.key == 'ArrowUp' || evt.key == 'ArrowDown' || evt.key == 'ArrowLeft' || evt.key == 'ArrowRight'){
        run=true;
    }
});