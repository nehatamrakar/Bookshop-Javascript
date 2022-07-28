const rank = 1;
let score = 10;


// variable declared using let
let name = 'Sara';
{
  // can be accessed only inside
  let name = 'Peter';

  console.log(name); // Peter
}
console.log(name); // Sara

let names = ["Sara", "John", "Paul"]
const batchOneNames = [...names]
const [sara, john, paul] = names;

console.log(names)
console.log(batchOneNames)
console.log(sara)
console.log(john)
console.log(paul)

let person = {name: "sara"}
console.log(person.name)
