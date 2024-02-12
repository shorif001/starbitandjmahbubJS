// const roll = [1, 2, 3]
// roll[1]  = 4
// roll.push(5)
// console.log(roll)


// let sum = 0;
// for (var i = 0; i < 10;  i++) {
//   sum = i;
// }
// // console.log(i)



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


//// Arrow function multiple parameter function body

// // normal funciton
// function doubleIt(num){
//   return num *2
// }
// const result = doubleIt(5)
// console.log(result)



// const doubleItt = function myFun(num){
//   return num * 2;
// }
// const result = doubleItt(5)
// console.log(result)

// arrow funciton

// const doubleITArrow = num => num *2
// console.log(doubleITArrow)

//or

// const bishalAmount = (x, y)=>{
//   const sum = x + y;
//   const diff = x - y
//   const result1 = sum * diff
//   return result1
// }

// const result2 = bishalAmount(7, 3)
// console.log(result2)


//// spread operator, concatenate multiple arrays, array max

// const ages = [12, 14, 16, 13, 17]
// const ages2 = [15, 16, 12]
// const ages3 = [25, 36, 22, 29]

// const allAges = ages.concat(ages2).concat(ages3)
// console.log(allAges)

//or

// const ages = [12, 14, 16, 13, 17]
// const ages2 = [15, 16, 12]
// const ages3 = [25, 36, 22, 29]

// const allAges2 = [ages, ages2, 5, ages3]
// console.log(allAges2)


//or

// const ages = [12, 14, 16, 13, 17]
// const ages2 = [15, 16, 12]
// const ages3 = [25, 36, 22, 29]

// const allAges2 = [...ages, ...ages2, 5, ...ages3]
// console.log(allAges2)


// const takaPoisa = [650, 450, 250, 850];
// const maximum = Math.max(...takaPoisa)
// console.log(maximum)




////class, constructor, create object from class

// class Student{
//   constructor(sId, sName){
//     this.id = sId;
//     this.name = sName
//     this.school = "kolimunnesa school"
//   }
// }

// const student1 = new Student(12, "masud");
// const student2 = new Student(13, "mahiya");
// console.log(student1, student2)
// console.log(student1.name, student2.name)



////inheritance, extends class method



// class Child{
//   constructor(name){
//     this.name = name
//   }
// }

// const baby = new Child("Arnold")
// const baby2 = new Child("Tom")
// console.log(baby)
// console.log(baby2)




// class Parent{
//   constructor(){
//     this.fatherName = "Schwerznegger"
//   }
// }


// class Child extends Parent{
//   constructor(name){
//     super();
//     this.name = name
//   }
//   getFullName(){
//     return this.name + " " + this.fatherName
//   }
// }

// const baby = new Child("Arnold")
// const baby2 = new Child("Tom")
// console.log(baby.getFullName())
// console.log(baby2)






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




/*
Encapsulation:

* Encapsulation make sure that "sensitive" data is hidden from users.
* To achieve this, we have to declare class variables/attributes as private.
* To read or modify the value of a private member we can provide get and set methods.

class Employee {
  constructor() {
      this.salary = 0;
  }
  setSalary(s) {
      this.salary = s;
  }
  getSalary() {
      return this.salary;
  }
}

const myObj = new Employee();
myObj.setSalary(50000);
console.log(myObj.getSalary());



Abstraction

Abstraction is a process of providing only the essential details to the outside world and hiding the internal details. It represent only the essential details in the program.


abstract class Shape{
  abstract void draw();
}

class Rectangle extends Shape{
  void draw(){System.out.printIn("drawing rectangle");}
}
class Circle1 extends Shape{
  void draw(){System.out.printLn("drawing circle");}
}

class TestAbstraction1{
  public static void main(String args[]){
    Shape s=new Circle1();
    s.draw()
  }
}

*/




//// advance js

//variable a jodi : 6 ta na thake tahoe shob truthy
// false, 0, "", null, undefined, NaN = ei shob gulo falsy r baki shob truthy

// const age = 0

// if(age){
//   console.log("condition is true")
// }else{
//   console.log("condition is false")
// }


//// null vs undefined different ways you will get undefined

//undefined
// let name;
// console.log(name)


// function add(num1, num2){
//   console.log(num1 + num2) // return na korar karone undefined disse.
//   // return num1 + num2
// }

// const result = add(13, 82)
// console.log(result)


// const student4 = {name:"masud", id:"12"}
// console.log(student4.email) // email property na thakar karone undefined diyese.

// let ages = [2, 5, 9]
// console.log(ages[11])// 11 to element nai tai undefined








//// double vs triple equal, implicit conversion

// const first = 2;
// const second = 3
// if(first == second){
//   console.log("condition is true")
// }else{
//   console.log("condition is false")
// }

//// double == equal hosse value check korbe
//// r === triple equal hosse ( value o check korbe type o check korbe)






////// map, filter, find, smart way to run for loop

const sumNumber = [2, 3, 4, 5, 6, 7];

const output = []
for (let i = 0; i < sumNumber.length; i++) {
  const element = sumNumber[i];
  const result = element * element
  output.push(result)
}
// console.log(output)


const numberss = [2, 3, 4, 5, 6, 7];

//map

// numberss.map(function(element, index, array){//// map function er bhitore 3 ta parameter thake. 1st single element, 2nd index, 3rd full array
//   console.log(element, index, array)
//   })

const result = numberss.map(function (element) {
  return element * element
})
// console.log(result)

// r o ek bhabe kora joy suto kore lekhar jonno.
const result1 = numberss.map(x => x * x)
// console.log(result1)



//// array filter

// const filterResult = numberss.filter(function(ele){
//   return ele > 5
// })
// console.log(filterResult)


//or

const filterResult1 = numberss.filter(x => x > 5) //5 er cheye boro number gulo dekhabe.
// console.log(filterResult1)


//// array filter

const findResut = numberss.find(x => x > 5)// 5 er cheye boro j number ta ase shei 1 ta number dekhabe..
// console.log(findResut)







//////arguments, array like objects log all array elements

// normal function
function addd(num1, num2) {
  return num1 + num2
}
const fResult = addd(2, 3)
// console.log(fResult)


// normal function
function adddd(num1, num2) {
  // console.log(arguments)
  // console.log([...arguments])
  return num1 + num2
}
const fResultt = adddd(2, 3, 5)// jodi parameter er cheye valu vabshi dewa hoy sheta check korar jonno arguments bebobar korte hobe.
// console.log(fResultt)







////// Apply map, filter, find on an array of objects

const students = [
  { id: 21, name: 'korim' },
  { id: 31, name: 'monir' },
  { id: 41, name: 'kushum shikdar' },
  { id: 71, name: 'moyori' },
];

// const studOutput = []
// for(let stud = 0; stud < students.length; stud++){
//   const singleStudent = students[stud]
//   // console.log(singleStudent)
//   studOutput.push(singleStudent)
// }

// console.log(studOutput)

// const singleStudent = []
// const singleName = students.map(function(element){
//   singleStudent.push(element)
// })

// console.log(singleStudent)

const singleNamee = students.map((sd) => {// sd ta function a use korar karone return korte hoyese
  return sd.name
})
// console.log(singleNamee)


//student filter
const studentFilter = students.filter(s => s.id > 40)
// console.log(studentFilter)

//student find
const studFind = students.find(s => s.id > 40)
// console.log(studFind)





//// scope, block scope, access outer scope variable

// let bonus = 20;
// function summ(first, second){
//   let result = first + second + bonus
//   console.log(bonus)
//   return result
// }
// const outputt = summ(3, 7)
// console.log(bonus)
// console.log(outputt)



//// hoisting ki?
//// jodi kono scope er bhitore var variable likha hoy. oi variable er diclaration ta oi scope er baire giye parant scope access korte parbe.
let bonus = 20;
function summ(first, second) {
  let result = first + second + bonus
  if (result > 9) {
    let mood = "happy"
    mood = "fishy"
    mood = "funky"
    // console.log(mood)
  }
  return result
}
const outputt = summ(3, 7)
// console.log(outputt)




////closure, encapsulation, private variable.


function stopWatch() {
  let count = 0
  return function () {
    count++;
    return count
  }
}

// const clock1 = stopWatch()
// console.log(clock1())
// console.log(clock1())
// console.log(clock1())
// const clock2 = stopWatch()
// console.log(clock2())
// console.log(clock2())

// kono ekta funciton er bhitore jodi r o ekta function thake shei bhitorer function take
// jodi return kori othoba use kori tahole ekta closed environment toiri kore she ekta extranal
// variable rekhe dey eta kei closure bole.




//// Array slice, splice, array join elements

const list = [1, 2, 3, 4, 5, 6, 7, 8]
const part = list.slice(2, 5)
// console.log(part)

const removed = list.splice(2, 3, 77)
// console.log(removed)
// console.log(list)

const together = list.join(" ")
// console.log(together)



//// break continue in a for loop

const numss = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < numss.length; i++) {
  if (numss[i] > 4) {
    break;
  }
  // console.log(numss[i])
}



// for (let a = 0; a < numss.length; a++) {
//   if (numss[a] < 2) {
//     continue;
//   }
//   console.log(numss[a])
// }








