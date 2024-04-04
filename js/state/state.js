import { ApprovedState, BlankState, DocumentContext, WithContentState } from "./models/stateModels.js";

const doc = new DocumentContext();
console.log(doc.state);
doc.write("Queso");
console.log(doc.content);

doc.setState(new ApprovedState());
console.log(doc.state);
doc.write("Queso con droga");

doc.setState(new WithContentState());
console.log(doc.state);
doc.write("Queso manchego");
console.log(doc.content);

doc.setState(new BlankState());
console.log(doc.state);
console.log(doc.content);






