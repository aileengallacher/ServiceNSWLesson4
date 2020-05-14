let pets = [

    {
  
      name: "Rex",
  
      age: 4,
  
      ownerName: "Luke"
  
    },{
  
      name: "Spot",
  
      age: 7,
  
      ownerName: "Jade"
  
    },{
  
      name: "Scooby",
  
      age: 3,
  
      ownerName: "Shaggy"
  
    },{
  
      name: "Lucky",
  
      age: 1,
  
      ownerName: "Luke"
  
    },{
  
      name: "Sadie",
  
      age: 3,
  
      ownerName: "Daniel"
  
    },{
  
      name: "Duke",
  
      age: 5,
  
      ownerName: "Sabine"
  
    }
  
  ];

  // Q1
//   function petsOwnedByLuke(pets) {
//     return pets.ownerName == "Luke";
//   }
//   let lukesPets = pets.filter(petsOwnedByLuke); 

//   console.log(lukesPets)

  // Q2

//   function getNames(pets) {
//     return pets.ownerName;
//   }
//   let petOwners = pets.map(getNames);

//   console.log(petOwners)

 // Q3

//   function petOwnedByShaggy(pets) {
//     return pets.ownerName == "Shaggy";

//   }
//   let shaggysPet = pets.find(petOwnedByShaggy);

//   console.log(shaggysPet)

  // Q4  pets less than 5yrs And have a pet or owner that starts with an S

  function findPets(pets) {
    let lessThan5 = pets.age < 5;  //lessThan5 will be a boolean
    let hasS = pets.name[0] == "S" || pets.ownerName[0] == "S";
    return lessThan5 && hasS;
  }  
    
      let whichPets = pets.filter(findPets); 
    
      console.log(whichPets);