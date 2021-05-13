function addNumber(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = addNumber(number1, number2);
console.log(result);

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Burak",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"] //tuple
// };

enum Role {
  ADMIN,
  READ_ONLY = 100,
  AUTHOR
}

// Better syntax
const person = {
  name: "Burak",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"], //tuple,
  role2: Role.ADMIN
};

console.log(person);

let favActivities: string[];
favActivities = ["Sports"];

let favActivities1: any[];
favActivities1 = ["Sports", 1];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

person.role.push("admin");
// person.role[1] = 10; //error
// person.role = [0, 'admin', 'user' ]

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "anna");

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine2(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedNumberAges = combine2(30, 26, "as-number");
console.log(combinedNumberAges);

const combinedStringNames = combine2("Max", "anna", "as-text");
console.log(combinedStringNames);
