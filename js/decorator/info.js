import { ClientComponent, HtmlClientDecorator, UpperCaseClientDecorator } from "./models/clientModel.js";

(async ()=>{
    const url = "https://jsonplaceholder.typicode.com/photos";
    const url2 = "https://jsonplaceholder.typicode.com/photos/1";
    
    const client = new ClientComponent(url);
    const data = await client.getData();
    // console.log("Data normal: ", data);

    const upperClient =new UpperCaseClientDecorator(client);
    const data2 = await upperClient.getData();
    // console.log("Data Upper: ", data2);

    const htmlClient = new HtmlClientDecorator(upperClient);
    const data3 = await htmlClient.getData();
    const template = data3.reduce((ac, e)=>{
        return ac + e.title + e.thumbnailUrl
    },"");
    divContent1.innerHTML = template;

    const htmlClient2 = new HtmlClientDecorator(client);
    const data4 = await htmlClient2.getData();
    const template2 = data4.reduce((ac, e)=>{
        return ac + e.title + e.thumbnailUrl
    },"");
    divContent2.innerHTML = template2;

})();