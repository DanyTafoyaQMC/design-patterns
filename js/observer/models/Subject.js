export class Subject {
    constructor(){
        this.observers = [];
    };
    subscribe(observer){
        this.observers.push(observer);
    };
    unsubscribe(observer){
        this.observers = this.observers.filter(obs => obs !== observer);
    };
    notify(data){
        this.observers.forEach(obs => obs.refresh(data));
    };
};

export class ItemSubject extends Subject {
    constructor(){
        super();
        this.data = [];
    };
    add(item){
        this.data.push(item);
        this.notify(this.data);
    };
};
