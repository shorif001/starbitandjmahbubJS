/*
If-else, Operator,

For-loop, while-loop, break statment, continue statement,

Array, object, destructure (object, array), spread operator (array, object), array of object,
map, filter, find, for of, forEach, Reduce.

Function, default parameter, Arrow Function ,

let, const

local storage, session storage, fetch, get vs post

OOP Concept

Inheritance = উত্তরাধিকার
Encapsulation
Polymorphism
Abstraction

Inheritance: jar kaj hosse onner boishishto nijer bhitor dharon kora:
eta emon ekta mechanism j mechanism bebohar kore amra uporer class gulo k nijer bhitor drive
korte pari ba onno j kono class k nijer bhitor drive korte pari ba porichalito korte pari
jar boishisto gulo k nijer bhitor niye ashte pari ebong ekta hierarchy toiri korte pari.
j hierarchy er bhitore kisu nirdishto data set othoba kisu method share hobe.

Example:
jodi emon hoy same type er kisu bar bar likhte hosse ba hobe.
tokhon ekta class toiri kore nibo. j class a oi property gulo thakbe onno j kono khane jodi
bebohar korar dorkar hoye shei class ta call kore use korte parbo
Example: class constructor


Encapsulation:
ekta jaygai method & property k bind kora kei Encapsulatin bole:
Encapsulation ekta idea j idea te data & method ek kora hoy.
ei j ek jaygai bind korlam eta ekta unit akare kaj korbe.

Example:
amader ekta class silo rectengle:
shei class er bhitor width height silo. eta hosse rectengle er data
ei data saraw kisu method silo = CalcArea(), CalcRange()

height, width, CalcArea(), CalcRange() ei shob kisu k jodi ami ekta class a bind kori
tahole ei prottek ta data ekta unit akare kaj korbe.
ei rectengle class k bebohar kore amra jodi ekta object banai
rect1 ba r1 tahole r1 er shathe height, width, CalcArea(), CalcRange() shob gulo bind hoye jabe
ebong prottekei ekta unit akare kaj korbe shei unit tar nam r1 ba ei object ta.
eta kei bola hosse Encapsulation.

Polymorphism = বহু রুপ
poly = অনেক morphism = চেহারা বা রুপ

 mone kori ekta class ase: Shape
 ei Shape class er bhitore ekta Draw() method ase
 ei Draw() method ta jokhon rectengle class er jonno kaj korbe tokhon rectengle draw korbe
 r jokhon Circle class er jonno kaj korbe tokhon circle draw korbe
 ei j Draw() method ta  ki bhabe alada alada kaj korse. ek e method 2 ta jaygai jawar fole
 2 dhoroner kaj korse nijer bohu rup prokash korse etai hosse Polymorphism.


*/


// startbit youtube channel

// keyword             variable   value
// var, let, const       age    =   13

// ==> Concatinatioin ba Template String

let name = 'Shorif Ahmed';
let age1 = 13;
// template leteral =
console.log(`I'm ${name} and I'm ${age1} years old`);


// // ==> if else

//shorto shapekkhe bivinno kaj shompadon kore

// if (condition) {
//   //run if true
// } else {
//   //run if false
// }


let age = 19;
if (age < 16) {
  console.log("kid");
}
else if (age <= 18) {
  console.log("teen");
}
else {
  console.log("adult");
}


// User list hidden show method
let userList = true;
if (userList < 0) {
  console.log("user list hidden");
}
else if (userList < 1) {
  console.log("user list show");
}
else {
  console.log("2 tar konotai na hole error message");
}

// ==> condition operator ( নির্দষ্ট করে দেওয়া এত থেকে এত পর্যন্ত হলে এটা হবে বা ২টা condition সত্য হলেই কোড রান করবে)
//// and operator (2 ba er beshi condition ad korar jonno.
//// jodi 2 ta condition e true hoy tahole puro condition tai true hobe.
//// r jodi 1ta condition o false hoy tahole puro condition tai false)

// else if(age <=18 && age >=13){
// console.log("teen")
// }


//// or operator || = or operator a jodi 2ta or operator thake
//// tar modde jodi ekta operator true hoye tahole puro operator tai true

// else if(age <=18 || age >=13){
// console.log("teen")
// }

//// not operator ! = kono operator ba condition true theke tahole take false kore dewar jonno ! operator

// else if(!(age <=18 || age >=13)){
// console.log("teen")
// }

// ==> Array ( একটা বক্সের মধ্যে অনেক গুলো ব্যালো রাখা বা এরে হেচ্ছে ভ্যালোর (value) এর সমষ্টি )

let myArray = [10, 20, 30, 40]
console.log(myArray[0]);

// ==> Nested Array

let myArray1 = [[4, [5, 99]], 10, [10, 120], 20];
console.log(myArray1[0][1][1]);

// ==> Spread Operator
/* Spread Operator একটি বিদ্যমান অ্যারে বা অবজেক্টের সমস্ত ডাটা অন্য অ্যারে বা অবজেক্ট এ copy/store করতে পারে। */

// Spread operator array
const ages = [12, 14, 16, 13, 17]
const ages2 = [15, 16, 12]
const ages3 = [25, 36, 22, 29]

const allAges2 = [...ages, ...ages2, 5, ...ages3]
console.log(allAges2)

// Spread operator object
const user = {
  name: "shorif1",
  age: 27,
  address: "uttara",
};
const user2 = {
  name: "shorif2",
  age: 28,
  address: "uttara",
};

const objectSpread = { ...user, user2 };
console.log(objectSpread);


//// 2 ta array 1ta object 1ta string thakle shob 1ta variable a rakhar jonno
//spread operatior
let arraylist = [2,3,4,5,6]
let itemPush = "std"
let objectData = {
  name: "shorif",
  id:1
}
let allData = [...arraylist, itemPush, objectData];
let allDataItemPush = [...arraylist, itemPush, objectData.id];
// console.log(allData)
// console.log("allDataItemPush",allDataItemPush)
// console.log(arraylist)



// ==> object

let myObject = {
  'name': 'Shorif Ahmed',
  'age': '25',
  'email': 'sashipon001@gmail.com'
}

console.log(myObject);

// => othoba single ekta dekhte chaile

let myObject0 = {
  'name': 'Shorif Ahmed',
  'age': '25',
  'email': 'sashipon001@gmail.com'
}
console.log(myObject.name);

// => othoba arrayr moto kore ber korte chaile
let myObject1 = {
  'name': 'Shorif Ahmed',
  'age': '25',
  'email': 'sashipon001@gmail.com'
}
console.log(myObject['name']);

// => 2 vabe result dekha jay:
// 1. console.log(myObject.name);
// 2. console.log(myObject['name']);


// এরে হচ্ছে variable এর কালেকশন আর JSON হচ্ছে Object এর কালেকশন






///// array of object


let arrayOfObjectList = [
  {name:"Shorif", id:1},
  {name:"Masud", id:2},
  {name:"Korim", id:3},
  {name:"Rohim", id:4},
  {name:"Josim", id:5},
]

// console.log(arrayOfObjectList)
// console.log(arrayOfObjectList[0])

// single object a notun ekta property add korar jonno
// const allDataa = arrayOfObjectList.map((item, index, array)=>{
//   // console.log(item)
//   if(item.id == 2){
//     return {
//       ...item,
//       address:"uttara"
//     }
//   }
//   return item
// })

// console.log(allDataa)

// shob object a notun ekta property add korar jonno
const allDataaa = arrayOfObjectList.map((item, index, array)=>{
  // console.log(item)
  return {
    ...item,
    address:"uttara"
  }

})

console.log(allDataaa)

// ==> JSON

let studentData = [
  {
    'id': 1,
    'name': 'Shorif Ahmed',
    'email': 'shorif@gmil.com'
  },
  {
    'id': 2,
    'name': 'Shipon',
    'email': 'shipon@gmil.com'
  },
  {
    'id': 3,
    'name': 'Shojib Hasan',
    'email': 'shojib@gmil.com'
  },
]
console.log(studentData);

// => Othoba onekgulo student er modde ek joner data output dekhte chai
let studentData0 = [
  {
    'id': 1,
    'name': 'Shorif Ahmed',
    'email': 'shorif@gmil.com'
  },
  {
    'id': 2,
    'name': 'Shipon',
    'email': 'shipon@gmil.com'
  },
  {
    'id': 3,
    'name': 'Shojib Hasan',
    'email': 'shojib@gmil.com'
  },
]
console.log(studentData[0]);

// => Othoba onekgulo student er modde ek joner nirdisto ekti data output dekhte chai

let studentData1 = [
  {
    'id': 1,
    'name': 'Shorif Ahmed',
    'email': 'shorif@gmil.com'
  },
  {
    'id': 2,
    'name': 'Shipon',
    'email': 'shipon@gmil.com'
  },
  {
    'id': 3,
    'name': 'Shojib Hasan',
    'email': 'shojib@gmil.com'
  },
]
console.log(studentData[0]['name']);


// ==> for Loop ( 1 data bar bar dekhar jonno ) bar bar gurbe

for (let i = 0; i < 10; i++) {
  console.log("I Love JavaScript");
}

// => othoba
for (let i = 0; i <= 100; i++) {
  console.log(`For run ${i} times`);
}

// => othoba
let student = [2, 3, 4, 5, 6, 7]
for (let a = 0; a < student.length; a++) {
  console.log(a)
}


// => othoba
let student1 = [2, 3, 4, 5, 6, 7, 8]
let output = []
for (let b = 0; b < student1.length; b++) {
  let sum = student1[b]
  let result = sum + sum
  output.push(result)
}

console.log(output)


// ==> While Loop
let i = 0;
while (i <= 100) {
  console.log(i);
  i++
}

// ==> break statment (loop cholar shomoy nirdisto jaigai loop ta thamiye dibe)
for (i = 0; i < 10; i++) {
  if (i == 6) {
    break;
  }
  console.log(i);
}


// ==> continue statement ( loop cholar shomoy nirdisto jaigai loop skip korbe)
for (i = 0; i < 10; i++) {
  if (i == 6) {
    continue;
  }
  console.log(i);
}

// ফাংশন এর সংজ্ঞা
// অনেক গুলো কাচামাল একটি মেশিনে দিয়ে মেশিন সবগুলো কাচামাল মিক্সড করে একটি আউটপুট দেয় তাকে ফাংশন বলে।
// ইনপুট হচ্ছে আরগুমেন্ট আর আউটপুট হচ্ছে রিটার্ন ভেলু

// ==> Function

function say_hello() {
  console.log("say hello to function");
}

say_hello();  //1 bar say_hello(); dile 1 bar result print hobe
say_hello();  //2 bar say_hello(); dile 2 bar result print hobe

// ==

function add(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}

add(5, 5);
add(20, 30);

// ==

function add(num1, num2) {
  let result = num1 + num2;
  return result; // return korle value ta ekta variable er modde rakhte hobe.
  // res নামে ekta variable a rakha hoyese
  // return korar karon hosse. return kora value ta niye onno arekta kaj korte hobe tai
}

// => চাইলে এই add function টা অন্য একটা variable এর মধ্যে রাখতে পারি। যেমন:
let res = add(6, 9);

console.log(add(5, 6));
console.log(`The result is ${add(4, 3)}`);



console.log(res);
console.log(`The result is ${res}`);



// ==> Arrow Function

// ==> সাধারণ ফাাংশন

function sayHello1() {
  // console.log('Hello world1');
}
sayHello1();


let sayHello2 = function () {
  // console.log("Hello World2");
}
sayHello2();



let sayHello3 = function (name) {
  // console.log(`Say Hello to ${name}`);
}
sayHello3('shorif');

//Arrow Function

let sayHello4 = () => {
  console.log(`Arrow Function without parameter`);
}
sayHello4();

// or
const bishalAmount = (x, y) => {
  const sum = x + y;
  const diff = x - y
  const result1 = sum * diff
  return result1
}

const result2 = bishalAmount(7, 3)
console.log(result2)


let sayHello5 = (name1, age) => {
  console.log(`Arrow Function : ${name1} who is ${age} years old`);
}
sayHello5('shorif', 27);


// ******************** Callback Function ***************


// console.log("one");
//setTimeout হেচ্ছে নির্দিষ্ষ্ট সময় পর একটা ফাাংশনকে কল করার জন্য্য
setTimeout(function () {
  //console.log("two");
}, 2000);
//console.log("three");

// কোন লাইন কোড যদি এক্সিকিউশন হতে একটু সময় নেয় তার জন্য অপেক্ষা না করে তার
// পরের লাইন টা এক্সিকিউশন করে। তারপরে সেই লাইনটা এক্সিকিউশন করে
// আগের লাইনে ডাটা না পাওয়ার কারনে ফাইল বা প্রজেক্টা এরর দিবে। আর এই সমস্যাটা সমাধান করার জন্য async ফাংশন ব্যবহার করতে হবে।

//=> callback

function jobOne() {
  //console.log("job one");
}

function jobTwo() {
  //console.log("job two");
}
// আমরা চাই জব ১ এর এক্সিকিউশন শেষ হওয়ার পরেই যেন জব ২ এক্সিকিউশন হয়
// জব ১ কে আগে কল করবো তার পরে জব ২ কে কল করবো ।

setTimeout(jobOne, 2000);
jobTwo();


// async ফাংশন ৩ ভাবে করা যায়:
// 1: callback 2: promise 3: Async Await
// নিচে উদাহরণ দেওয়া হলো।

function add(a, b) {
  console.log(`The sum of ${a} and ${b} is ${a + b}`);
}

function message() {
  console.log('Addition Done');
}

//আমাদের টারগেট হচ্ছে এ‌‌‌ড ফাংশনটা কল হওয়ার পরেই যেন মেসেজ ফাংশন টা কল হয়।
//একটা ফাংশন এর ভিতরে অন্য আরেকটি পুরো ফাংশন কল করবো
//কারন আমরা জানি জাবাস্ক্রিপ্ট এ আমরা যেহেতু অবজেক্ট পেরামিটার হিসাবে পাস করতে চাই এবং ফাংশন গুলো
//এক ধরনের অবজেক্ট তাহলে আমরা পেরামিটার হিসাবে আমরা একটা ফাংশন পাস করতে পারি
//আমরা এই ফাংশন এর নাম দিলাম callback


function add(a, b, callback) {
  console.log(`The sum of ${a} and ${b} is ${a + b}`);
  callback();
  //এবং আমরা চাচ্ছি কন্সল লগ এর পরেই  সেই ফাংশনটি এক্সিকিউট হবে তাই callback টাকে কল করে দিলাম
}

function message() {
  console.log('Addition Done');
}

//এখন আমরা এড ফাংশন টাকে কল করে প্রথম আরগুমেন্ট হিসেবে দিলাম ৫ এবং ২য় আরগুমেন্ট হিসেবে দিলাম ৬ এবং ৩য় আরগুমেন্ট হচ্ছে আমাদের callback ফাংশনটি
add(5, 6, message); //এখানে callback ফাংশন হিসেবে আমরা যে ফাংশন টি দিব, এড ফাংশনটি এক্সিকিউশন শেষ হওয়ার পরেই সেই ফাংশনটি কল হবে | callback হিসেবে আমরা message নামের পুরো ফাংশনটি পাস করলাম
//আমরা callback ফাংশন হিসেবে যে ফাংশন পাস করেছি সেই ফাংশনটি রান করতে চাই
// console.log এর অপারেশন শেষ হওয়ার পরেই তাই আমরা add ফাংশন এর মধ্যে callback পাস করে নিয়ে
//console.log এর পরে কল করে দিয়েছি। message ফাংশনটি উপরের মত তৈরি করে না নিয়ে,
//add ফাংশন এর মধ্যে ৩টা আরগুমেন্ট এর মধ্যে message ফাংশনটি লিখতে পারি।

//নিচে উদাহরণ দেওয়া হলো

add(5, 6, function message() {
  console.log('Addition Done');
});

//এই message ফাংশনটি উপরের মত করে না লিখে Arrow Function লিখতে পারি।

add(5, 6, () => {
  console.log('Addition Done');
});

//এক লাইনের ফাংশন এর জন্য কারলি ব্র্যাকেট লাগেনা যেমন:

add(5, 6, () => console.log('Addition Done'));

//যদি callback ফাংশনটি ১ লাইনের হয় তাহলে আমরা চাই পেরামিটার না দিয়ে আন্ডারস্কুর ব্যবহার করতে পারি
add(5, 6, _ => console.log('Addition Done'));


// *************** callback function End ********************













//default parameter

// function add(num1, num2){
//   return num1 + num2;
// }
// const total = add(15, 17)
// console.log(total)

//// or
// function add(num1, num2){
//   if(num2 == undefined){
//     num2 = 0
//   }
//   return num1 + num2;
// }
// const total = add(15)
// console.log(total)


// //// or

// function add(num1, num2){
//   num2 = num2 || 0
//   return num1 + num2;
// }
// const total = add(15, 5)
// console.log(total)

//// or

// function add(num1, num2 = 0){
//   return num1 + num2;
// }
// const total = add(15, 10)
// console.log(total)




//map

// numberss.map(function(element, index, array){//// map function er bhitore 3 ta parameter thake. 1st single element, 2nd index, 3rd full array
//   console.log(element, index, array)
//   })

const result = numberss.map(function (element) {
  return element * element
})
// console.log(result)

//// filter

// const filterResult = numberss.filter(function(ele){
//   return ele > 5
// })
// console.log(filterResult)


//// find

const findResut = numberss.find(x => x > 5)// 5 er cheye boro j number ta ase shei 1 ta number dekhabe..
// console.log(findResut)

//student find
const studFind = students.find(s => s.id > 40)
// console.log(studFind)

// ==> for of
let stud = [2, 3, 5, 6, 7]
for (anyName of stud) {
  // console.log(anyName)
}





//// destructure


// const person = {
//   name: "shorif",
//   age: 28,
//   job: 'facebook',
//   gfName: 'kukila',
//   address: 'uttara',
//   phone: '017171717',
//   friends:['tom', 'cruise', 'ajim']
// }

// console.log(person.gfName)

// const fgName = person.gfName
// const phone = person.phone
// console.log(fgName, phone)


// const {phone, gfName} = person
// console.log(phone)


//// nested object destructure

// const complexObject = {
//   name: 'abc',
//   info:{
//     address: 'kolabagan',
//     leader: 'tiger leader'
//   }
// }

// const {leader} = complexObject.info
// console.log("🚀 ~ file: es6Jhonkar.js:220 ~ leader:", leader)



//// array destructure

// const friends = ['rohim', 'korim', 'sojib', 'taher', 'mojid', 'kamal']
// const [chotoFriend, nextFriend, ...restFriends] = friends
// console.log(chotoFriend, nextFriend, restFriends)




// ==> forEach

const stude = [2, 5, 10, 20]
stude.forEach(myColback)

function myColback(z) {
  // console.log(z)
}

//or

const studen = [2, 5, 10, 20]
studen.forEach((element, index, array) => {
  // console.log(element)
})



// reduce

let sumList = [2, 4, 6, 8, 10]

let sum = sumList.reduce((priviousTotalValue, currentValue, index, mainArray) => {
  return priviousTotalValue + currentValue
})
// console.log(sum)

// or

let reduceAllValue = [1, 2, 3, 4, 5]
const max = reduceAllValue.reduce((priviousTotalValue, currentValue, index, mainArray) => {
  if (priviousTotalValue > currentValue) {
    return priviousTotalValue
  } else {
    return currentValue
  }
})
// console.log("max = ", max)


// or example

let shopingCart = [
  {
    items: "T-shirt",
    productAmount: 4,
    price: 400
  },
  {
    items: "watch",
    productAmount: 6,
    price: 600
  },
  {
    items: "Damble",
    productAmount: 2,
    price: 200
  },
  {
    items: "pent",
    productAmount: 3,
    price: 300
  },
]

let itemPriceTotal = shopingCart.reduce((prevItemPrice, singleItem) => {
  return prevItemPrice + singleItem.productAmount * singleItem.price
}, 0 /* initial value */)

// console.log(itemPriceTotal)//6500


// koto gulo yes r koto gulo no r koto gulo absent vote ase ta ber kora.

const votes = ['yes', 'no', 'yes', 'yes', 'yes', 'no', 'absent']
const voteResult = votes.reduce((prevVote, currentVote) => {
  if (prevVote[currentVote]) {
    prevVote[currentVote]++
  } else {
    prevVote[currentVote] = 1
  }
  return prevVote
}, {})

// console.log(voteResult)




// class constructor

// ekta class diye onek gulo object toiri kora jay

class Student {
  constructor(sId, sName) {
    this.id = sId;
    this.name = sName;
    this.school = 'uttara college'
  }
}

const student2 = new Student(12, 'joshim');
const student3 = new Student(22, 'rohim')
const student4 = new Student(29, 'bappi')
// console.log(student1, student2)
// console.log(student1.name, student2.name, student3)


//// class constructor advance
//// inheritance, extends class, super, class method

class Parent {
  constructor() {
    this.fatherName = 'masud'
  }
}

// child er shathe parent add korar jonno extend korte hobe.
// extends use korar jonno constructor er bhitor super() likhte hobe
// class er bhitor property saraw function o likhte pari. constructor er baire. (function word ta likha jabena)

class Child extends Parent {
  constructor(name) {
    super()
    this.name = name
  }
  getFullName() {
    return `Child name = ${this.name}, Father Name = ${this.fatherName}`
  }
}

// child er baba ba parent er nam ki er jonno alada property
//ba all child er "default property" add korar jonno extends use korte hobe


const baby = new Child("Arnold")
const baby2 = new Child("Tom")
// console.log(baby.getFullName())
// console.log(baby2)