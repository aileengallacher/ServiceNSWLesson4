// Q1
// function numIsBetween(floor, ceiling, num) {
// if (num > floor && num < ceiling) {
// return true;
// }
// else
// {
// return false
// }
// }
// let answer = numIsBetween (80, 120, 90)  // test by changing the numbers 

// console.log(answer)

// Q2
// function checkNameAndAge(person) {
//     let isOver30 = person.age > 30;
//     let foundX = false;
//     for (let i = 0; i < person.name.length; i++) {
//         let letter = person.name[i].toLowerCase();
//         if(letter == "x") {
//             foundX = true;
//             break;
//         }
//     }
//     if(isOver30 || foundX) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let person1 = {
//     name: "Aileen",
//     age: 21
// }

// console.log(checkNameAndAge(person1));

// Q3

function thisIsMyResult (person, num, nameMatch) {
       // condition 1: the function should return true if age of the object is equal to the second param
    let firstCond = num == person.age;   // sets the variable firstCond to ensure num equals person.age
    let secondCond = person.name != nameMatch;   // sets the variable secondCond to ensure person.name and nameMatch do not match

    if (firstCond && secondCond) {      
        return true
    }
   else {
       return false
   }
    }

console.log(thisIsMyResult({name: "Aileen",       // test program by changing values!
age: 37},
21,
"Aileen"))