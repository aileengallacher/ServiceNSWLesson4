// Q1
function numIsBetween(floor, ceiling, num) {
if (num > floor && num < ceiling) {
return true;
}
else
{
return false
}
}
let answer = numIsBetween (80, 120, 90)  // test by changing the numbers 

console.log(answer)

// Q2
function checkNameAndAge(person) {
    let isOver30 = person.age > 30;
    let foundX = false;
    for (let i = 0; i < person.name.length; i++) {
        let letter = person.name[i].toLowerCase();
        if(letter == "x") {
            foundX = true;
            break;
        }
    }
    if(isOver30 || foundX) {
        return true;
    } else {
        return false;
    }
}

let person1 = {
    name: "Aileen",
    age: 37
}

console.log(checkNameAndAge(person1));
// Q3

