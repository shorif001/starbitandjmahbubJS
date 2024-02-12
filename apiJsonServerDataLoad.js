//// json, json structure, parse, stringify, json properties


const user = {
  id: 235,
  name: 'Masud',
  lover:{
    name:'jamila',
    favFood: 'pizza'
  },
  friendsAge:[12,34,56],
  friends:['kamal', 'jamal', 'kalam']
}

const userJson = JSON.stringify(user)
console.log(userJson)

const userFromJson = JSON.parse(userJson)
console.log(userFromJson)