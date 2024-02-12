function feetToMile(n){
  let feet = 5280;
  for (let i = 1; i <= n; i++) {
    feet = feet * i
  }
return feet
}

let result = feetToMile(3)
console.log(result) // ans bhul ashe.