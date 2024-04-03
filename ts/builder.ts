import { NormalPersonBuilder, PersonDirector } from "./models/builderModels";

const PersonBuilder = new NormalPersonBuilder();
const Danny = PersonBuilder
.setName("Ernesto Daniel")
.setLastName("Tafoya Molina")
.setAge(21)
.setCountry("Mexico")
.setCity("Aguascalientes")
.addHobby("Programacion")
.addHobby("Videojuegos")
.build();
console.log(Danny);

const Carolina = PersonBuilder
.setName("Carolina Magdiel")
.setLastName("Moran")
.setAge(22)

console.log(Carolina);

const director = new PersonDirector(PersonBuilder);
director.createSimplePerson("Carolina", "Moran");
const caro = PersonBuilder.build(); 


console.log(caro)