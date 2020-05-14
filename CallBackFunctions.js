let people = [
    {
        name: "Luke",
        message: "Hi"                       // properties in the object people
    },
    {
        name: "Dan",
        message: "I'm Dan!"
    }
];

function myGreeter(people, callback) {          // people and callback are the arguments in the function myGreeter
    for (let i = 0; i < people.length; i++) {
        let person = people[i];                //
        let greeting = callback(person.message);    // sets callback to be person.message ie Hi for Luke
        console.log(`${greeting} ${person.name}`);
    }
}

// function myCallbackFunction(message) {
//     if (message == "Hi" || message == "Hello") {     // checking to see if it runs in here
//         return "Hi";       
//     } else {
//         return "Hello There";
//     }
// }

function anotherCallbackFunction(message) {      // it then runs here because line 36 tells it to
     if (message == "I'm Dan!") {                // for Dan this will be true as set on line 8
        return "NO WAY, THAT'S SO COOL";         // so this text will appear
    } else {
        return "Hello";                          // this will appear for Luke as line 29 is false 
    }
}

myGreeter(people, anotherCallbackFunction);

// Array.filter
// function myFilterFunction(person) {
//     if (person.name == "Luke") {
//         return true; // will be included in filtered array
//     } else {
//         return false; // will be excluded from filtered array
//     }
// }

// let filteredArray = people.filter(myFilterFunction);

// console.log("people");
// console.log(people);
// console.log("filteredArray");
// console.log(filteredArray);