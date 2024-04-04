import { Ticket } from "./models/stateModels";

//ejecucion
const ticket = new Ticket(5);
console.log(ticket.getState);
console.log(ticket.next());

ticket.add(6);
console.log(ticket.getState);
console.log(ticket.next());

ticket.add(4);//no esta lleno, falta 1
console.log(ticket.getState);
console.log(ticket.next());
console.log(ticket.next());
ticket.add(3);// con 3 queda lleno en 5
console.log(ticket.getState);


