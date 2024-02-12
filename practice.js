let ifTest = 15;

if (ifTest <= 12) {
  console.log("Kids")
} else if (ifTest >= 13 && ifTest < 17) {
  console.log("teen")
} else {
  console.log("adult")
}


// let userFor = [2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < userFor.length; i++) {
//   const element = userFor[i];
//   console.log(element)
// }

let userForr = [2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < userForr.length; i++) {
  let element = userForr[i]
  if (element == 5) {
    continue
  }
  // console.log(element)
}


let userArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrayOfObject = [
  {
    name: "shorif",
    email: 'shorif@gmail.com',
    phone: 12345
  },
  {
    name: "shorif2",
    email: 'shorif@gmail.com2',
    phone: 123452
  }
]
// console.log("🚀 ~ file: practice.js:43 ~ arrayOfObject:", arrayOfObject[0].name)

// console.log(userArray)

let nestedArray = [1, 2, [3, 4, 5, 6], 4, 5, 6, 7, 8, 9]
// console.log(nestedArray[2])


// object

let user = {
  name: "shorif",
  email: 'shorif@gmail.com',
  phone: 12345
}

// console.log(user)
// console.log(user.name)


let spr = [1, 2, 3, 4, 5, 6]
let spr2 = [7, 8, 9, 10, 11, 12, 13, 14]

let c = [...spr, ...spr2]
// console.log("🚀 ~ file: practice.js:67 ~ c:", c)



let arrayMap = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let mapData = arrayMap.map((ele, index, arr) => {
  // console.log(ele, index, arr)
})

let filterList = arrayMap.filter((ele) => {
  return ele > 5
})
// console.log(filterList)

let findList = arrayMap.find((ele) => {
  return ele > 5
})
// console.log(findList)


//function

function beton(a, b) {
  let sum = a + b
  //  console.log(sum)
  return sum
}

// beton(20, 30)
let total = beton(20, 30)
// console.log("🚀 ~ file: practice.js:96 ~ total:", total)


let beriableF = function (a, b) {
  let summ = a + b
  //  console.log(summ)
  return summ
}
// beriableF(20, 30)
let sTotal = beriableF(20, 40)
//  console.log("🚀 ~ file: practice.js:108 ~ sTotal:", sTotal)


let arrFunc = (a, b) => {
  let sum = a + b
  return sum
}
let arrValue = arrFunc(2, 3)
// console.log("🚀 ~ file: practice.js:116 ~ arrValue:", arrValue)


let forOfV = [1, 2, 3, 4, 5, 6, 7, 8]

for (anyName of forOfV) {
  // console.log(anyName)
}

//for each

let foreachv = [9, 8, 7, 6, 5, 4, 3, 2, 1]
foreachv.forEach(anyFuncName)

function anyFuncName(x) {
  // console.log(x)
}


//reduce

let reduceV = [1, 2, 3, 4, 5]

let sumn = reduceV.reduce(anyFunc)
//reduceV.reduce(anyFunc, initialValue, index, array)

function anyFunc(priviousTotalValue, currentValue, index, mainArray) {
  return priviousTotalValue + currentValue
}
// console.log("🚀 ~ file: practice.js:140 ~ sumn:", sumn)


//or

const resl = reduceV.reduce((accu, value) => {
  return accu + value
})
// console.log("🚀 ~ file: practice.js:151 ~ resl ~ resl:", resl)

// or

const max = reduceV.reduce((ac, valu) => {
  if (ac > valu) {
    return ac
  } else {
    return valu
  }
})
// console.log("max = ", max)

//or

let sumList = [2, 4, 6, 8, 10]

let sum = sumList.reduce((prev, curr) => {
  return prev + curr
})

// console.log(sum)


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
}, 0 /*initial value*/)

// console.log(itemPriceTotal)//6500


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


//// class advance
//// inheritance, extends class, super, class method

class Parent{
  constructor(){
    this.fatherName = 'masud'
  }
}

// child er shathe parent add korar jonno extend korte hobe.
// extends use korar jonno constructor er bhitor super() likhte hobe
// class er bhitor property saraw function o likhte pari. constructor er baire. (function word ta likha jabena)
class Child extends Parent{
  constructor(name){
    super()
    this.name = name
  }
  getFullName(){
    return `Child name = ${this.name}, Father Name = ${this.fatherName}`
  }
}

// child er baba ba parent er nam ki er jonno alada property
//ba all child er "default property" add korar jonno extends use korte hobe

const baby = new Child("Arnold")
const baby2 = new Child("Tom")
console.log(baby.getFullName())
console.log(baby2)



class Office{
  constructor(officeName){
    this.officeName = "simec"
  }
  getName(){
    return this.name + " " + this.officeName
  }
}

class Employee extends Office{
  constructor( name, age, address){
    super()
    this.name = name
    this.age = age
    this.address = address
  }
}

const singleEmp = new Employee("masud", 23, 'uttara')
const singleEmp2 = new Employee("masudd", 232, 'uttaraa')
console.log(singleEmp, singleEmp2)