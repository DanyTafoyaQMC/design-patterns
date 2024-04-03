import { CommercialInfoProductDecorator, HTMLProductDecorator, ProductComponent, StoreProductDecorator } from "./models/productModel.js";


//componente
const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

//decorador 1 con componente
const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");
console.log(commercialInfoProduct.getDetail());

//decorador 2 con componente
const StoreProduct = new StoreProductDecorator(commercialInfoProduct, 10);
console.log(StoreProduct.getDetail());

//decorador 2 con decorador 1
const product  = new StoreProductDecorator(commercialInfoProduct, 15.5)
console.log(product.getDetail());

//decorador 3 con decorador 2 con decorador 1
const HtmlProductDecorator = new HTMLProductDecorator(product);
content.innerHTML = HtmlProductDecorator.getDetail();
console.log(HtmlProductDecorator.getDetail());


