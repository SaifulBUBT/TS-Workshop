// export const car: {
//   name: string;
//   model: string;
//   year: number;
//   isGerman: boolean;
// } = {
//   name: "BMW",
//   model: "7 series",
//   year: 2025,
//   isGerman: true,
// };

// console.log("Car: ", car.name);

type Car = {
  name: string;
  model: string;
  year: number;
  isGerman: boolean;
};

export const car: Car = {
  name: "BMW",
  model: "7 series",
  year: 2025,
  isGerman: true,
};

//
type Employee = {
  name: string;
  age: number;
};
export const employee: Employee = {
  name: "Saiful",
  age: 30,
};
