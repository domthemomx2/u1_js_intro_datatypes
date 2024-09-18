//when we combine strings and numbers
//it will work for Division, Subration, and multiplication
//it will NOT work as expected for Addition
//string concatination
//the Modulo (%) operator % gives the REMAINDER
//console.log (10+10)
//math. class (pow, sqrt, random, floor, ceil, round...etc)
//console.log(Math.sqrt(81))
//use camelCase
//using camelCase below
//do not need semicolons in this version of javascript
//console.log(6 * "hello")
//enters the terminal as not a number or NaN
//boolean has two values only - true and false
//everything in JS is either truthy or falsey
//let isLoggedIn = true
//let isActive = false
// console.log("") = false as it is an empty string
// console.log("21 pilots is better than Deftones") = true as it is a full string

// AND && => operators both have to be true
// OR || => one One has to be true
// NOT ! => always goes to the logical opposite

//arrays are ways to store data

//let cheeses = ['brie', 'gouda', 'edam', 'pepperjack']
//console.log(cheese)

//objects are stored in {}
//they can contain different types of data
//they are used throughout the web

//const user = {
   //username: 'fakeuser123',
    //password: 'password123!',
    //id: 1273,
   // isLoggedIn: false
//console.log(user)


//let friends = ['Moe', 
    //'Larry', 
    //'Curly', 
   // 'Brittany', 
   // 'Ashely', 
   // 'Aisha']
//console.log(friends.length)

//const annoyingArray = [0, 1, [2,3], [4, [5,6]], 7, [8,9, 10]] 

//console.log(annoyingArray[2][0])

//const fruits = ['strawberries', 'apples', 'bananas', 'grapes', 'pineapples', 'oranges', 'kiwi']

//console.log(fruits.length)
//console.log(fruits[6])
//console.log(`I am hungry I think I'll have a $(fruits[2])`)
//toString() converts the array into a single string
//onsole.log(fruits.toString())
//.pop removes the last item
//.push will add items to the end of a list
//fruits.pop()
//console.log(fruits)
//fruits.shift()
//console.log(fruits)

let myFavoriteSong = 'Happy'
console.log(myFavoriteSong)
console.log(`My favorite song is ${myFavoriteSong}`)

console.log(`end of prompt 1`)

let bestSinger = 'Pharrell'
let shirt = 'white'
const ageToday = 51
console.log(`The best singer is ${bestSinger} he is ${ageToday} and he wears a ${shirt} shirt in the song ${myFavoriteSong}.`)

console.log(`end of prompt 2`)

let carValue = 5000
console.log(carValue + 2000)
console.log(carValue - 2000)
console.log(carValue * 3 )
console.log(carValue / 7)
console.log(carValue % 2)

console.log(`end of prompt 3`)

let firstName = 'Dominique'
let lastName = 'Dupree'
let fullName = (firstName + " " + lastName)
console.log(`Hello my name is ${fullName}`)

console.log(`end of prompt 4`)

const movies = ["sword in the stone", "lion king", "the little mermaid"];
movies.unshift("finding nemo");
movies.push("101 dalmatians")
movies.splice(1,0, "pocahontas")
console.log(movies)

//How to remove array elements with splice()
//For example, suppose you have an array named months but you have some day names in the array as follows:
//let months = ["January", "February", "Monday", "Tuesday"];
//Information is from https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/

console.log(`end of prompt 5`)
//need help with retrieving arrays//
let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

console.log(array1[0,2])
console.log(array2[1])
console.log(array3[1][1][1])

console.log(`end of prompt 6`)

let array4 = ['a', 'b', 'c', 'd', 'e'];
let length = array4.length - 2
console.log(array4[length])

//learned this from Rhiannon during class. It is explained that we start with 0 and we are subtract the total amount of elements in the array (5) from 2.

//let thom = ['Thom', 1000, 'Christchurch'];
//let karolin = ['Karolin', 16, 'New York'];
//let kristyn = ['Kristyn', 5, 'Pittsburgh'];
//let cathleen = ['Cathleen', 186, 'New York'];

//thom[0] = 'tom'
//karolin[1] = '17'
//cathleen[2] = 'gotham city'
//kristyn[2] = 'oakland'

//console.log(thom)
//console.log(karolin)
//console.log(cathleen)
//console.log(kristyn)

//this was explained by Austin and Instructor Jeremy. I do not understand any of this portion with arrays. I'm struggling with understand length, how to select certain elements in the array.
