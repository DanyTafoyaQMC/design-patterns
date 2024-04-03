import { useMemo } from "../hooks/useMemo.js";

export class ClientComponent {
    constructor(url){
        this.url = url;
    }

    async getData(){
            
            const resp = useMemo(async (url)=>{
                const response = await fetch(url);
                const data = await response.json();
                return data;
            })
            const data = await resp(this.url);
            return data;
    }
}

//decorator
class ClientDecorator {
    constructor(clientComponent){
        this.clientComponent = clientComponent;
    }
    async getData(){
        const data = await this.clientComponent.getData();
        return data;
    }
}

//decorator 1 
export class UpperCaseClientDecorator extends ClientDecorator{
    async getData(){
        const data = await super.getData();
        const newData = data.map(e=>{
            return {
                ...e,
                title: e.title.toUpperCase()
            }
        });
        return newData;
    }
}

//decorador 2
export class HtmlClientDecorator extends ClientDecorator {
    async getData(){
        const data = await super.getData();
        const newData = data.map(e=>{
            return {
                ...e,
                title: `<h2>${e.title}</h2>`,
                thumbnailUrl: `<img src="${e.thumbnailUrl}"/>`
            }
        });
        return newData;
    }
}