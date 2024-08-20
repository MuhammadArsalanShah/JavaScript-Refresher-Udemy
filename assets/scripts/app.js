// // import { apiKey, xyz as content } from "./utils.js";
// // import defApiKey from "./utils.js";

import * as ourUtils from "./utils.js"

// // console.log('apikey:',apiKey);
// // console.log('xyz:',xyz);
// // console.log('xyz content:',content);


// // console.log('defaul apikey:', defApiKey);

// console.log('apikey:',ourUtils.apiKey);
// console.log('xyz:',ourUtils.xyz);

// console.log('default apikey:', ourUtils.default);







// console.log('Javascript refresher');

//  let userMessage = "This is a dummy user message!";

//  console.log('User Message:',userMessage);

//  const userMessage2 = "This is a dummy user message 2!";

// //  userMessage2 = "new value"; //generates error

//  console.log('User Message:',userMessage2);

//  var firstName = 'Arsalan';

//  var firstName = "Noman"; // var can be reintialized which can cause errors 

//  console.log("First Name:",firstName);







// console.log(10 + 5);
// console.log(10 - 5);
// console.log(10 / 5);
// console.log(10 * 5);
// console.log(10 % 5);
// console.log(10 === 5);
// console.log(10 === 10);
// console.log(10 < 5);


// console.log("Hello" + " " + "World") //+ is also used for concatenation

// if (2 < 5) {
//   console.log('Works');
// }







// function greet(userName='John Doe', message='default dummy message') {
//   // console.log('inside greet function');
//   // console.log(`User name is: "${userName}" and the message is "${message}"`);
//   return `Hey, I'm ${userName} and I must say ${message}`;
// }

// greet();
// greet('Arsalan Shah', 'javascript refresher section');

// console.log(greet());

// const greeting1 = greet('Arsalan Shah', 'javascript refresher section')
// console.log(greeting1);









// function combine(v1, v2, v3) {
//   const ans = (v1 * v2) / v3;
//   return ans;
// }

// const result = combine(20, 60, 100);
// console.log(`The result is: ${result}`);







// const arrowGreet = ourUtils.default;
// console.log(arrowGreet('Zahid'));

// const anotherArrow1 = () => {
//   return 'arrow 1';
// }

// console.log(anotherArrow1());

// const anotherArrow2 = number => number * 2;

// console.log(anotherArrow2(5));

// const anotherArrow3 = (number, string) => `double: ${number * 2} string: ${string}`;

// console.log(anotherArrow3(10, 'this number is multiplied by 2'));









// const user = {
//   name: 'Arsalan',
//   age: 38,
//   greet () {
//     console.log(`Hello """${this.name}""" from greet method inside user object`);
//   }
// };

// console.log(user);
// console.log(user.name);
// user.greet();

// class UserClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age
//   }
//   greet () {
//     console.log(`user name """${this.name}""". user age """${this.age}""" `);
//   }
// }

// const user1 = new UserClass('Waleed', 28);
// console.log(user1)

// user1.greet()









// const hobbies = ['Cooking', 'Gardening', 'Sports', 'Reading'];

// console.log(hobbies[0]);
// console.log(hobbies);

// hobbies.push('Working');
// console.log(hobbies)

// const foundIndex = hobbies.findIndex(item => item === 'Sports');

// console.log(foundIndex);

// const editedHobbies1 = hobbies.map((item) => item + "!");
// const editedHobbies2 = hobbies.map((item) => ({ HobbyName: item }));


// console.log(editedHobbies1);
// console.log(editedHobbies2);

// function transformToObjects(numList) {
//   console.log(numList);
//   return numList.map((item) => ({ val: item }));
// }

// const myNumArray = [1, 2, 3, 4, 5];

// const objNumArray = transformToObjects(myNumArray);
// console.log(objNumArray);









// const userNameData = ['Arsalan', 'Shah'];
const [fName, lName] = ['Arsalan', 'Shah'];


// const fName = userNameData[0];
// const lName = userNameData[1];

console.log(fName);
console.log(lName);

const user = {
  firstName: 'Zahid',
  lastName: 'Ahmed'
}

// const firstName = user.firstName;
// const lastName = user.lastName;

// console.log(firstName);
// console.log(lastName);

const {firstName, lastName} = {
  firstName: 'Safi',
  lastName: 'Ullah'
}

console.log(firstName);
console.log(lastName);


