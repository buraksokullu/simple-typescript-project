function addNumber(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = addNumber(number1, number2);
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 101] = "AUTHOR";
})(Role || (Role = {}));
// Better syntax
var person = {
    name: "Burak",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
    role2: Role.ADMIN
};
console.log(person);
var favActivities;
favActivities = ["Sports"];
var favActivities1;
favActivities1 = ["Sports", 1];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
person.role.push("admin");
// person.role[1] = 10; //error
// person.role = [0, 'admin', 'user' ]
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine("Max", "anna");
function combine2(input1, input2, resultConversion) {
    var result;
    if (resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedNumberAges = combine2(30, 26, "as-number");
console.log(combinedNumberAges);
var combinedStringNames = combine2("Max", "anna", "as-text");
console.log(combinedStringNames);
