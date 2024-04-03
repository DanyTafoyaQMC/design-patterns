class Singleton {
    static getInstance(){
        return Singleton.instance;
    }
    constructor(){
        
        this.random = Math.random();
        
        if(Singleton.instance){
            return Singleton.instance;
        };

        Singleton.instance = this;
    };
}
class WeekDays {
    DaysEs = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    DaysEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    constructor( lang ){
        this.lang = lang;
        if(WeekDays.instance){
            return WeekDays.instance;
        };

        WeekDays.instance = this;
    };
    getDays(){
        return this.lang === "es" ? this.DaysEs : this.DaysEn;
    }
};
export function SingletonMain(){
    // const singleton = new Singleton();
    // const singleton2 = new Singleton();
    // const Singleton3 = Singleton.getInstance();
    // console.log(singleton.random);
    // console.log(singleton2.random);
    // console.log(singleton === singleton2);
    // console.log(Singleton3 === singleton2);
    const days = new WeekDays("es");
    const dias = new WeekDays();

    console.log(days.getDays());
    console.log(dias.getDays());
}

