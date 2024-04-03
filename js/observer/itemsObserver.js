import { ItemSubject } from "./models/Subject.js";
import { HtmlElementObserver, Observer } from "./models/Observers.js";

//HTML ELEMENTS
const txtName = document.querySelector("#txtName");
const btnAdd = document.querySelector("#btnAdd");
const div3 = document.querySelector("#div3");
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");

class Program {
    static main(){
        const items = new ItemSubject();

        const div1Obs = new HtmlElementObserver(div1);
        const div2Obs = new Observer((data)=>{
            div2.innerHTML = data.map(e=> e.split("").reverse().join(""));
        });
        const div3Obs = new Observer((data) => {
            div3.innerHTML = data.length;
        });

        items.subscribe(div1Obs);
        items.subscribe(div2Obs);
        items.subscribe(div3Obs);

        btnAdd.addEventListener("click", () => {
            const name = txtName.value;
            items.add(name);
        });
    };
};

Program.main();