import { Ball } from "./models/stateModels.js";

const ctx = canvas.getContext('2d');
ctx.fillStyle="black";

const ball = new Ball(ctx, canvas, 50);
ball.print();
setInterval(()=>{
    ball.print();
}, 50)