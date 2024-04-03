export class Observer {
    constructor(fn){
        this.fn = fn;
    };

    refresh(data){
        this.fn(data);
    };
};

export class HtmlElementObserver {
    constructor(element){
        this.element = element;
    };
    refresh(data){
        this.element.innerHTML = data.reduce((ac, e)=> {
            return ac + `
                <p>${e}</p>
            `
        },"")
    };
};