// for (let i = 2; i <= 1024; i *= 2) {
//     console.log(i)
// };

// let i = 2;
// while (i < 1024) {
//     i = i * 2
//     console.log(i)
// };

// for (let i = 1; i <= 10; i++) {
//     console.log(Math.pow(2, i))
// }

// let i = 1;
// while(i <= 10){
//     console.log(Math.pow(2,i))
//     i += 1
// }

let input = "";
do {
    input = prompt("What is your name: ")
} while (!isNaN(Number(input)));

alert(`Hello ${input}!`);