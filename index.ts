import { client, Admin } from "./classes";
import { greaterThan, type, mult, concatenateStrings } from "./functions";
import { ShowUser } from "./interfaces";
import { Example } from "./dist/decorators"

const user = new client("kassem", "kassemElhajj@gmail.com", new Date("2003-6-24"), 9, false)
console.log(ShowUser(user))

const adminUser = new Admin("kassem elhajj", "kassem123321@gmail.com", new Date("2003-6-24"), 1, "admin")
console.log(adminUser.displayUser())

console.log(greaterThan(15,20))
console.log(type(4.5))
console.log(mult(4, 5))
console.log(concatenateStrings("hi", "everyone,", " good morning"))

const example = new Example("Kassem");
example.name = "kassem elhajj";           // Triggers @LogProperty (I udated the name)
console.log(example.name);       // Triggers the getter (logs the value)
example.greet("Hello!");         // Triggers @LogMethod (logs the method call)