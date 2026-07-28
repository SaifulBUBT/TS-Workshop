// import "./func";
import { add, greet } from "./func";
import { car, employee } from "./object";

const message: string = "Hello World!";

console.log(message);

const isAdmin: boolean = true;
console.log(isAdmin);

console.log("Imported car:", car);
console.log("Car name:", car.name, "Model:", car.model, "Year:", car.year);

console.log("Employee: ", employee.name);

// imported from func.ts file
console.log(add(5.67, 3.899));

greet("Saiful");
greet("Alice", "How are u?", "How are u doing?", "Learning TS?");
