//Example 1
const array0 = [1, 4, 9, 16];

const cb = function(x) {
return x * 3;
}

// Pass a function to map
const map0 = array0.map(cb);
console.log('map0:',map0);
console.log('array0:',array0);

//Example2
const numbers = [4, 9, 16, 25];
const map2 = numbers.map(Math.sqrt);
console.log(map2);

//Example3
const array1 = [1, 4, 9, 16];
const map3 = array1.map(function(x) {
  return x * 2;
});
console.log(map3);

//Example4
const celsiusTemperatures = [0, 10, 20, 30, 40];
const fahrenheitTemperatures = celsiusTemperatures.map(function(celsius) {
  return (celsius * 9/5) + 32;
});
console.log(fahrenheitTemperatures);

//Example5
const fruits = ["apple", "banana", "cherry", "date"];
const uppercaseFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});
console.log(uppercaseFruits);

//Example6
const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 30 }
];
const productNames = products.map(function(product) {
  return product.name;
});
console.log(productNames);

//Example7
const sentences = ["Hello World", "How are you?", "I am fine."];
const alphabets = sentences.map(function(sentence) {
  return sentence.split(" ");
});
console.log(alphabets);

//Example8
const names = ["John", "Jane", "Bob", "Alice"];
const listItems = names.map(function(name) {
  return `<li>${name}</li>`;
});
console.log(listItems);

//Example9
const words = ["apple", "banana", "cherry", "date"];
cb2 = function(word) {
  return word.length;
};
const lengths = words.map(cb2);
console.log(lengths);

//Example10
const dates = [new Date("2022-01-01"), new Date("2022-02-02"), new Date("2022-03-03")];
const formattedDates = dates.map(function(date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
});
console.log(formattedDates);

//Example10
function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}

const persons = [
  {firstname: "Malcom", lastname: "Reynolds"},
  {firstname: "Kaylee", lastname: "Frye"},
  {firstname: "Jayne", lastname: "Cobb"}
];

const map1 = persons.map(getFullName);
console.log(map1);
