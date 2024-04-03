import { Component } from "../interfaces/interfaces";

export class ProductComponent implements Component {

    protected name: string;
    constructor(name:string){
        this.name = name;
    }

    getDetail(): string {
        return `${this.name}`
    }
}

abstract class ProductDecorator implements Component {
    protected component:Component;
    constructor(component:Component){
        this.component = component;
    }
    getDetail(): string {
        return this.component.getDetail();
    }
}

//decorator 1
export class CommercialProductDecorator extends ProductDecorator {
    private tradename:string;
    private brand:string;

    constructor(component:Component, tradename:string, brand:string){
        super(component);
        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail(): string {
        return this.tradename + " " + this.brand + " " + super.getDetail();
    }
}

//decorator 2
export class StoreProductDecorator extends ProductDecorator {
    private price:number;

    constructor(component:Component, price:number){
        super(component);
        this.price=price;
    }
    getDetail ():string {
        return super.getDetail() + " " + this.price;
    }
}

export class HTMLProductDecorator extends ProductDecorator {
    getDetail(): string {
        return `
        <h2>Información del producto</h2>
        <p>${super.getDetail()}</p>
        `
    }
}