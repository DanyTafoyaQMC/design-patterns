import { data } from "./data.js";
const content = document.querySelector("#content");
const slcOptions = document.querySelector("#slcOptions");
class SaleContext {
    constructor(strategy){
        this.strategy = strategy;
    };
    setStrategy(strategy){
        this.strategy = strategy;
    }
    calculate(amount){
        return this.strategy.calculate(amount);
    };
};

class RegularSaleStrategy {
    constructor( tax ){
        this.tax = tax;
    };
    calculate(amount){
        return amount + (amount * this.tax);
    };
};

class DiscountSaleStrategy{
    constructor(tax, discount){
        this.tax = tax;
        this.discount = discount;
    }
    calculate(amount){
        return amount + (amount*this.tax) - this.discount;
    }
}

class ForeignSaleStrategy{

    calculate(amount){
        return amount / this.getDollarPrice();
    }
    getDollarPrice(){
        return 20;
    }
}


class InfoContext {
    constructor(strategy, data, element){
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    };
    setStrategy(strategy){
        this.strategy = strategy;
    };
    show(){
        this.strategy.show(this.data, this.element);
    };
};

class ListStrategy{
    show(data, element){
        element.innerHTML= data.reduce((ac, beer)=>{
            return ac + `
            <div>
                <h2>${beer.name}</h2>
                <p>${beer.country}</p>
            </div>
            <hr>
            `;
        },"");
    };
};
class DetailedListStrategy{
    show(data, element){
        element.innerHTML= data.reduce((ac, beer)=>{
            return ac + `
            <div>
                <h2>${beer.name}</h2>
                <p>${beer.country}</p>
                <p>${beer.info}</p>
            </div>
            <hr>
            `;
        },"");
    };
};
class ListWithImagesStrategy{
    show(data, element){
        element.innerHTML= data.reduce((ac, beer)=>{
            return ac + `
            <div>
              <img  width="10%"src="${beer.img}" alt="imagen que no es cerveza xD">  
              <h2>${beer.name}</h2>
            </div>
            <hr>
            `;
        },"");
    };
};


export function mainStrategy(){
    // const regularSale = new RegularSaleStrategy(0.16);
    // const sale = new SaleContext(regularSale);
    // const discountSale = new DiscountSaleStrategy(0.16, 3);
    // const foreignSale = new ForeignSaleStrategy();

    // console.log(sale.calculate(10));
    // sale.setStrategy(discountSale);
    // console.log(sale.calculate(10));
    // sale.setStrategy(foreignSale);
    // console.log(sale.calculate(10));
    const strategies = [
        new ListStrategy(),
        new DetailedListStrategy(),
        new ListWithImagesStrategy()
    ];

    const info = new InfoContext(new ListStrategy(), data, content);
    console.log(info);
    info.show();

    slcOptions.addEventListener("change", (e)=>{
        const op = e.target.value;
        info.setStrategy(strategies[op]);
        info.show();
    });

};