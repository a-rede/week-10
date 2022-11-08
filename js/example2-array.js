let fruits = ['Apple', 'Banana']
//Add new element to the end of the array
fruits.push('Orange')
console.log(fruits)
//Remove the last element of the array
fruits.pop()
console.log(fruits)
//Add new element to the beginning of the array
fruits.unshift("Mango")
console.log(fruits)
//Remove the first element of the array
fruits.shift()
console.log(fruits)

// Second Part of the Activity
let sequence = [1,1,2,3,5,8,13]

for (let element of sequence) {
    console.log(element)
}

//Third Part of the Activity
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: "male",
    interests: ['music', 'skiing']
}

console.log(`My name is ${person.name[0]} ${person.name[1]}`)
console.log(`I am interested in ${person.interests[0]} ${person.interests[1]}`)