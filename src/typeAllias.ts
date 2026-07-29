type User = {
  id: string | number;
  firstName: string;
  lastName?: string;
  skills: string[];
  address: {
    street: string;
    city: string;
    country: string;
    position: {
      lat: number;
      long: number;
    };
  };
};

type Address = User["address"];
type Position = User["address"]["position"];

// function createUser(firstName: string, lastName?: string): User {
//   return {
//     id: crypto.randomUUID(),
//     firstName,
//     lastName,
//     skills: ["JS", "TS", "React"],
//   };
// }
// const u1 = createUser("Martin", "Joe");
// console.log(u1);

function printAddress(address: Address) {
  console.log(address.country);
}

printAddress({
  street: "34hf",
  city: "Dhaka",
  country: "Bangladesh",
  position: {
    lat: 34.786,
    long: 90.786,
  },
});
