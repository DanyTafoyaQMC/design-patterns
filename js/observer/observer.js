import { Observer } from "./models/Observers.js";
import { Subject } from "./models/Subject.js";

//HTML ELEMENTS
const myText = document.querySelector("#myText");
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");

//SUBJECT
const subject = new Subject();
const obs1 = new Observer(d=>console.log("Soy el obs1 y esta es la data " + d));

const obs2 = new Observer(d=>{
    div1.innerHTML = d;
});

const obs3 = new Observer(d => {
    div2.innerHTML = d.split("").reverse().join("");
});
subject.subscribe(obs1);
subject.subscribe(obs2);
subject.subscribe(obs3);

myText.addEventListener("input", (e)=>{
    subject.notify(myText.value);
});

