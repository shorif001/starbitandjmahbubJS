// if else

// var biscuitPrice = 9;
// if (biscuitPrice < 10) {
//   console.log("if")
// }else{
//   console.log("else")
// }

// var ticketPrice = 1000;
// var receivedAmount = 800;
// var result = ticketPrice - receivedAmount

// if (result > 1000) {
//   console.log("apni jete parben")
// } else {
//   console.log(`apni jete parbenna. Apnar ${result} taka kom ase`)
// }


// let jobPaiso = true;
// let savingsAmount = 2000

// if (jobPaiso == true && savingsAmount > 20000) {
//   console.log("asho patri khuji")
// } else {
//   console.log("tor kopale biye nai")
// }


//array

// let teaLine = ['masud', 'rohim', 'korim', 'jobbar', 'salam', 'nuri'];
// var part = teaLine.slice(2, 5);
// console.log("part",part)
// console.log("tealine", teaLine)


// var friendsAge = ['10', '20', '30', '40']
// var sonaliAge = friendsAge[2]
// friendsAge[1] = 21
// var position = friendsAge.indexOf("30")
// friendsAge.push("50")//array list er last a ekta element add korbe

// console.log(friendsAge)
// console.log("position", position)
// console.log("length", friendsAge.length)

// friendsAge.pop(); //last er element ta ber/remove kore dewa
// console.log(friendsAge)




// cha khawar line

// var teaLine = ['kalam', 'salam', 'balam']
// teaLine.push('jalam')
// console.log(teaLine)
// teaLine.pop();
// console.log(teaLine)
// teaLine.shift();//1st er element ta remove hobe
// console.log(teaLine)
// teaLine.unshift("palam");// array list er 1st a ekta element add korbe
// console.log(teaLine)


//while loop

// var num = 10;
// while(num <= 15){
//   num++
//   console.log(num)
// }



//for loop and map 2 ta eki jinish


// for(let i = 0; i <=10; i++){
// console.log(i)
// }


// var nums = [55, 66, 77, 88, 99, 11, 44];

// for(let i = 0; i < nums.length; i++){
//   var element = nums[i]
// console.log(element)
// }


// let friendsName = ['rohim', 'korim', 'jobbar', 'sattar', 'rofiq'];
// for(let i = 0; i<friendsName.length; i++){
//   let singleFriend = friendsName[i]
//   console.log(singleFriend)
// }

//function

// function sayLoveYou(){
//   console.log("test text")
//   console.log("test text 2")
// }

// sayLoveYou()

//function with parameter

// function doubleIt(num){
// var result = num * 2;
//   return result;
// }
// doubleIt(2)
// doubleIt(5)

// var first = doubleIt(6)
// var second = doubleIt(11)
// console.log(first, second)
// var total = first + second;
// console.log(total)

// function add(num1, num2){
//   var result2 = num1 + num2;
//   return result2
// }

// var sum = add(5, 10)
// console.log("sum", sum)


//object

// var student = {
//   id: 1,
//   name:"shorif",
//   phone: 17455854525,
//   address: "Uttara"
// }

// var student2 ={
//   id:2,
//   name: "niha",
//   phone:123654,
//   address: "kawla"
// }

// var phonePropName = "phone"

// // var phoneNo = student.phone
// // var phoneNo = student["phone"]
// var phoneNo = student[phonePropName]

// student2.cinema = "khela ghor"
// console.log(phoneNo)
// console.log(student2)


// er por 1 no. line theke 157 no. line porjonto ja shikhlam tar
// use case dekhbo ekhon




// var inch = 156;
// var feet = inch/12

// console.log(feet)


// function inchToFeet(inch2){
//   var feet2 = inch2/12
//   // console.log(feet2)
//   return feet2
// }
// var naniFeet = inchToFeet(200)
// console.log(naniFeet)
// var nanaFeet = inchToFeet(500)
// console.log(nanaFeet)

// //array er modde value rekhew kora jay jemon:

// var value = [156, 256, 356]

// var nanaFeet2 = inchToFeet(value[0])
// var naniFeet2 = inchToFeet(value[1])
// var dadiFeet2 = inchToFeet(value[2])
// console.log("nanaFeet2", nanaFeet2)
// console.log("naniFeet2", naniFeet2)
// console.log("dadiFeet2", dadiFeet2)


//value change
// jodi name 4 okkhor er beshi hoy.   paltano.

// const name = "jabel"

// if(name.length > 4){
//   name = "junu"
// }
// console.log(name)


////// example

// // leapYear = লিপ ইয়ার

// const year = 3566;
// console.log("Bhag fol", 3566 / 4) //bhag fol
// console.log("bhag shesh", 3566 % 4) // bhag shesh


// const years = 3998;
// let remainder = years % 4;
// if(remainder == 0){
//   console.log("Your year is a leap Year")
// }else{
//   console.log("Your year is not a leap Year")
// }


// function isLeapYear(year){
// const remainder = year % 4;
// if(remainder == 0){
//   return true
// }else{
//   return false
// }
// }

// function isLeap(year) {
//   return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? "Leap year." : "Not leap year.";
// }

// const checkleapyear = isLeap;
// console.log(checkleapyear)


// //factorial

// // 3! = 1x2x3x
// // 4! = 1x2x3x4
// // 5! = 1x2x3x4x5
// // 10! = 1*2*3*4*5*6*7*8*9*10
// let factorial = 1;
// for (let i = 1; i<=10; i++) {
//   factorial = factorial * i
// }

// function factorial(num) {
//   let factorial = 1
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i
//   }
//   return factorial;
// }

// let result = factorial(6)
// console.log(result)

// // question
// factorial kibhabe ber korba?

// ans: ekta variable er default value hishabe 1 rakhbo.
// tarpor for loop a (i=1;i<=5; i++){
//   variable name = variable * 1
//   console.log(variable)
// }


////factorial with while loop

// let i = 1;
// let factorial = 1;
// while (i <=10) {
//   factorial = factorial * i
//   console.log(i, factorial)
//   i++
// }



////factorial with recursive

// function factorial(n){
//   if(n == 0){
//     return 1;
//   }else{
//     return n * factorial(n-1)
//   }
// }
// let result = factorial(10)
// console.log(result)


// fibonacci

// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];

// let fibo = [0, 1];

// for(let i = 2; i<=12; i++){
// fibo[i] = fibo[i-1]+fibo[i-2]
// // console.log(fibo[i], fibo[i-1], fibo[i-2])
// }
// console.log(fibo)


// function fibonacci(n){
//   let fibo = [0, 1];
//   for(let i = 2; i<=n; i++){
//     fibo[i] = fibo[i-1]+fibo[i-2]
//     // console.log(fibo[i], fibo[i-1], fibo[i-2])
//     }
//     return fibo
// }
// let result = fibonacci(12)
// console.log(result)



//////fibonacci with recursive

