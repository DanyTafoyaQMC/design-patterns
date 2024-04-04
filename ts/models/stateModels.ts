import { IState } from "../interfaces/interfaces";

export class Ticket {
    private state : IState;
    quantity : number;
    readonly limit: number;
    private number : number;

    constructor(limit:number){
        this.limit = limit;
        this.quantity = 0;
        this.number = 0;
        this.state = new EmptyState();
    };
    get getNumber():number{
        return this.number ++
    }
    set setState(state:IState){
        this.state = state;
    }
    get getState():IState {
        return this.state;
    }
    next():number|null{
        return this.state.next(this);
    }
    add(quantity:number):void{
        this.state.add(this, quantity);
    }
};

export class EmptyState implements IState {
    next(ticket: Ticket): number | null {
        return null;
    };
    add(ticket: Ticket, quantity: number): void {
        if(quantity < ticket.limit){
            ticket.quantity = quantity;
            ticket.setState= new WithDataState()
        }else if( quantity === ticket.limit ) {
            ticket.quantity = quantity;
            ticket.setState=new FullState();
        };
    };
};

export class WithDataState implements IState {
    next(ticket: Ticket): number | null {
        ticket.quantity --;
        if(ticket.quantity<=0){
            ticket.setState = new EmptyState();
        }
        return ticket.getNumber;
    };
    add(ticket: Ticket, quantity: number): void {
        if(quantity < ticket.limit){
            ticket.quantity += quantity;
        }else if( (ticket.quantity + quantity )=== ticket.limit ) {
            ticket.quantity += quantity;
            ticket.setState=new FullState();
        };
    };
};

export class FullState implements IState {
    next(ticket: Ticket): number | null {
        ticket.quantity --;
        if(ticket.quantity<=0){
            ticket.setState = new EmptyState();
        }else {
            ticket.setState = new WithDataState();
        }
        return ticket.getNumber;
    };
    add(ticket: Ticket, quantity: number): void {
        console.log("Ticket lleno");
    };
};