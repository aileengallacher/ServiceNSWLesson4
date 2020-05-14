let pets = [                                // object is pets containing these elements
    {
        name: "Rex",
        age: 4,
        ownerId: 42
    }, {
        name: "Spot",
        age: 7,
        ownerId: 132
    }, {
        name: "Scooby",
        age: 3,
        ownerId: 546
    }, {
        name: "Lucky",
        age: 1,
        ownerId: 42
    }
];

let people = [                           // object is people containing these elements
    {
        name: "Luke",
        id: 42
    }, {
        name: "Shaggy",
        id: 546
    }, {
        name: "Jade",
        id: 132
    }
];

function mapPet(pet){                          // declares a function , makes pet a property
    function findPersonById(owner) {
        return owner.id == pet.ownerId;
    }
    let owner = people.find(findPersonById);
    return {
        name: pet.name,
        age: pet.age,
        owner: owner.name,
        id: owner.id
    };
}

let detailedPets = pets.map(mapPet);    // makes a new array THIS IS THE FIRST STEP WHEN IT IS RUN
console.log(detailedPets);