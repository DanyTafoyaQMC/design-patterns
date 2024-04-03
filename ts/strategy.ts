import { LoginContext, LoginDBStrategy, LoginGoogleStrategy, LoginServiceStrategy } from "./models/strategymodels";

const auth = new LoginContext(new LoginDBStrategy());
const resp = auth.login("admin", "root");
console.log("Entra? ", resp);

auth.setStrategy(new LoginServiceStrategy());
const resp2 = auth.login("admin", "1234");
console.log("Entra? ", resp2);

auth.setStrategy(new LoginGoogleStrategy());
const resp3 = auth.login("Dylan", "unodostres");
console.log("Entra? ", resp3);