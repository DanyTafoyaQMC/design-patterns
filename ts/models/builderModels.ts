import { IPersonBuilder } from "../interfaces/interfaces";

export class Person {
    private name : string;
    private lastname: string;
    private age : number;
    private country : string;
    private city : string;
    private hobbies : string[];
    constructor(name: string, 
        lastname:string, 
        age: number, 
        country: string, 
        city: string, 
        hobbies: string[]){

            this.name= name;
            this.lastname= lastname;
            this.age = age;
            this.country= country;
            this.city = city;
            this.hobbies = hobbies;
    }

    getFullName():string {
        return `${this.name} ${this.lastname}`;
    };
};

export class NormalPersonBuilder implements IPersonBuilder {
    name : string; 
    lastname: string; 
    age : number; 
    country : string;
    city : string; 
    hobbies : string[];
    constructor(){
        this.name = '';
        this.lastname = '';
        this.age = 0;
        this.country = '';
        this.city = '';
        this.hobbies = [];
    };
    private reset():void{
        this.name = "";
        this.lastname = "";
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];
    }
    setName(name: string): IPersonBuilder {
        this.name = name;
        return this;
    };
    setLastName(lastname: string): IPersonBuilder {
        this.lastname = lastname;
        return this;
    };
    setAge(age: number): IPersonBuilder {
        this.age = age;
        return this;
    };
    setCountry(country: string): IPersonBuilder {
        this.country = country;
        return this;
    };
    setCity(city: string): IPersonBuilder {
        this.city = city;
        return this;
    };
    addHobby(hobby: string): IPersonBuilder {
        this.hobbies.push(hobby);
        return this;
    };
    build(): Person{
        const person = new Person(
            this.name,
            this.lastname,
            this.age,
            this.country,
            this.city,
            this.hobbies
        );
        this.reset();
        return person;
    }
}

export class PersonDirector {
    private personBuilder : IPersonBuilder;
    constructor(personBuilder:IPersonBuilder){
        this.personBuilder = personBuilder;
    }
    setPersonBuilder(personBuilder: IPersonBuilder){
        this.personBuilder = personBuilder;
    };
    createSimplePerson(name:string, lastname:string){
        this.personBuilder
        .setName(name)
        .setLastName(lastname)
    };
};