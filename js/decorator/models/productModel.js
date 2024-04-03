export class ProductComponent {
    constructor(name){
        this.name = name; 
    }
    getDetail(){
        return `${this.name}`;
    }
}

class ProductDecorator {
    constructor(productComponent){
        this.productComponent = productComponent;
    }
    getDetail(){
        return this.productComponent.getDetail()
    }
}

export class CommercialInfoProductDecorator extends ProductDecorator {
    constructor (productComponent, tradename, brand){
        super(productComponent);
        this.tradename = tradename;
        this.brand = brand;
    }
    getDetail(){
        return `${this.tradename} ${this.brand} ` + super.getDetail();  
    }
}

export class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price){
        super(productComponent);
        this.price = price;
    }
    getDetail(){
        return super.getDetail() + ` ${this.price} ` ;
    }
}

export class HTMLProductDecorator extends ProductDecorator {
    getDetail(){
        return `<h2>Información del producto</h2>
            <p>${super.getDetail()}</p>
        `
    }
}