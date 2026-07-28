/***
 * Typed parameters
 * Typed return value
 * Optional parameters
 * Default Value
 * Rest Parameters
 *
 * *** */

export function add(a: number, b: number): string {
  return (a + b).toFixed(2);
}

// console.log(add(3.89, 4.899));

// Optional parameters

export function greet(
  name: string,
  message: string = "Welcome!",
  ...rest: string[]
) {
  console.log(`${name}, ${message}, ${rest}`);
}

// greet("Saiful");
// greet("Alice", "How are u?", "How are u doing?", "Learning TS?");
