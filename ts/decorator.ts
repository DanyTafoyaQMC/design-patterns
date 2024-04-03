import { CommercialProductDecorator, HTMLProductDecorator, ProductComponent, StoreProductDecorator } from "./models/decoratorModels";

//component
const productComponent = new ProductComponent("Cerveza");
console.log("Producto: ",productComponent.getDetail());

//decorator 1
const commercialInfoProduct = new CommercialProductDecorator(productComponent, "London Porter", "Fuller's");
console.log("Producto comercial: ",commercialInfoProduct.getDetail());

//decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 10);
console.log("Store product 1: ", storeProduct.getDetail());

//decorator 2 con decorator 1
const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 10);
console.log("Store product 2: ", storeProduct2.getDetail());

//decorator 3 con decorator 2 con decorator 1
const HtmlProductDecorator = new HTMLProductDecorator(storeProduct2);
console.log("HTML product: ", HtmlProductDecorator.getDetail());