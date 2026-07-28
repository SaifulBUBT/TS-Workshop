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

/*********============***** */
enum Role {
  HR = "HR",
  MANAGER = "MANAGER",
  DEVELOPER = "DEVELOPER",
}

const employees: {
  id: number;
  name: string;
  role: Role;
}[] = [];

employees.push({ id: 1, name: "Saiful", role: Role.DEVELOPER });
employees.push({ id: 2, name: "Alex", role: Role.HR });
employees.push({ id: 3, name: "Bob", role: Role.MANAGER });
employees.push({ id: 4, name: "Martin", role: Role.DEVELOPER });

export function findById(id: number): {
  id: number;
  name: string;
  role: Role;
} {
  const emp = employees.find((employee) => employee.id === id);

  if (!emp) {
    throw new Error("Employee not found!");
  }
  return emp;
}
