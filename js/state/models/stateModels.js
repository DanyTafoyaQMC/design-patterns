export class DocumentContext {
    constructor(){
        this.content = "";
        this.state = new BlankState();

    }

    setState(state){
        this.state = state;
    }

    write(text){
        this.state.write(this, text);
    }
}

export class BlankState{
    write(documentContext, text){
        documentContext.content = text;
        documentContext.setState(new WithContentState());
    }
}

export class WithContentState{
    write(documentContext, text){
        documentContext.content += " " + text;
    } 
}

export class ApprovedState {

    write(documentContext, text) {
        console.error("Aprobado y ya no se va a modificar: " + text);
    }
}

export class Ball {
    constructor(ctx, canvas, ballSize){
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.ballSize = ballSize;
        this.positionX = 0;
        this.positionY = 0;

        this.state = new State1();
    };
    
    setState(state){
        this.state = state;
    };

    print(){
        this.state.print(this);
    };
};

export class State1 {
    print(ball){
        ball.ctx.clearRect(0,0, ball.width, ball.height); 
        ball.ctx.fillRect(ball.positionX,
             ball.positionY,
             ball.ballSize,
             ball.ballSize);
        if(ball.positionX < (ball.width - ball.ballSize)) ball.positionX += ball.ballSize;
        else ball.setState(new State2());
    }
}
export class State2 {
    print(ball){
        ball.ctx.clearRect(0,0, ball.width, ball.height); 
        ball.ctx.fillRect(ball.positionX,
             ball.positionY,
             ball.ballSize,
             ball.ballSize);
        if(ball.positionY < (ball.height - ball.ballSize)) ball.positionY += ball.ballSize;
        else ball.setState(new State3());
    }
}
export class State3 {
    print(ball){
        ball.ctx.clearRect(0,0, ball.width, ball.height); 
        ball.ctx.fillRect(ball.positionX,
             ball.positionY,
             ball.ballSize,
             ball.ballSize);
        if(ball.positionX>0) ball.positionX -= ball.ballSize;
        else ball.setState(new State4());
    }
}
export class State4 {
    print(ball){
        ball.ctx.clearRect(0,0, ball.width, ball.height); 
        ball.ctx.fillRect(ball.positionX,
             ball.positionY,
             ball.ballSize,
             ball.ballSize);
        if(ball.positionY > 0) ball.positionY -= ball.ballSize;
        else ball.setState(new State1());
    }
}