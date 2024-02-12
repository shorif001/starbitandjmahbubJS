//if else

// let age = 26

// if(age < 12){
//   console.log("kids")
// }else if(age >= 18 && age <= 25){
//   console.log("adult")
// }else if(age){
//   console.log("buira")
// }


//For-loop


let bc = [2,3,4,5,6]
for(let a = 0; a<bc.length; a++){
  // console.log(bc[a])
}

let bcd = [2,3,4,5,6]
for(let a = 0; a<bcd.length; a++){
  // console.log(bc[a])
  if(bcd[a] == 5){
    break;
  }
  // console.log(bcd[a])
}

for (i = 0; i < 10; i++) {
  if (i == 6) {
    break;
  }
  // console.log(i);
}

//array

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




// array of object

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