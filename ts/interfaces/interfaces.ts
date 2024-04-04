import { Person } from "../models/builderModels";
import { Ticket } from "../models/stateModels";

export interface IStrategy {
    login(user, password: string):boolean;
}
export interface Component {
    getDetail():string;
}

export interface IPersonBuilder {
    name : string; 
    lastname: string; 
    age : number; 
    country : string;
    city : string; 
    hobbies : string[];
    setName(name:String):IPersonBuilder;
    setLastName(lastname:string):IPersonBuilder;
    setAge(age:number):IPersonBuilder;
    setCountry(country:string):IPersonBuilder;
    setCity(city:string):IPersonBuilder;
    addHobby(hobby:string):IPersonBuilder;
    build():Person;
};

export interface IState {
    next(ticket:Ticket):number|null;
    add(ticket:Ticket, quantity:number):void;
}