let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  const getAge = pet => {
    getFullYear() - pet.bornOn;
    console.log(getAge); }
  
  let petsWithAge = [];
  pets.forEach(pet=>{pet.age = getAge(pet)})
    
  console.log(petsWithAge);
  
  let dogs = [];
  pets.filter(pet=>{pet.type === "dog"})
  
  
  console.log(dogs);
  
  let jasper;
  pets.find(pet=>{pet.name === "Jasper"})
  
  console.log("Jasper is " + jasper.age + " years old");