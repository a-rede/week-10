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

//Fourth Part of the Activity
let person1 = {
    name: 'Celeste',
    age: 31,
    height: '170cm'
}

for (let key in person1) {
    console.log(`Person's name is ${person1['name']}`)
}

//Fifth Part of the Activity
let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};

let students = [student1, student2, student3];
let counter = 0;
// for (let stud of students) {
//     if (stud.GPA > 3 && stud.program == 'CIT') {
//         console.log(stud)
//     }
// }

for (let stud of students) {
    if (stud.program == 'CIT' && stud.GPA > 3) {
        counter++
    }
}
console.log(counter)