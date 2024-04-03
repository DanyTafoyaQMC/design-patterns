import { IStrategy } from "../interfaces/interfaces";


export class LoginContext implements IStrategy{
    private strategy:IStrategy;
    constructor (strategy:IStrategy){
        this.strategy = strategy;
        this.setStrategy(strategy);
    };
    setStrategy(strategy:IStrategy){
        this.strategy= strategy;
    };

    login(user:string, password:string):boolean{
        return this.strategy.login(user, password);
    };
};
export class  LoginDBStrategy implements IStrategy{
    login(user:string, password:string):boolean{
        console.log("login a la base de datos");
        if(user==="admin" && password==="root"){
            return true;
        };
        return false;
    };
};

export class LoginServiceStrategy implements IStrategy {
    login(user:string, password:string):boolean{
        console.log("Un microservicio de autenticación");
        if(user==="user" && password==="1234"){
            return true;
        };
        return false;
    };
}

export class LoginGoogleStrategy implements IStrategy {
    login(user: string, password:string){
        console.log("Login con google");
        if(user ==="Dylan" && password==="unodostres"){
            return true;
        }
        return false;
    }
}
