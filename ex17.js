const person = {
  person1: { name: "Adam Adamsson", age: 25 },
  person2: { name: "Brittney Petersson", age: 37 },
  person3: { name: "Camilia Andersson", age: 34 },
  person4: { name: "Daniel Danielsson", age: 22 },
  person5: { name: "Eden Svensson", age: 40 },
  person6: { name: "Farah Emilsson", age: 47 },
};

function findBeteenAge(x, y) {
  for (let index in person) {
    const thisPerson = person[index];
    if (thisPerson.age >= x && thisPerson.age <= y) {
      console.log(thisPerson);
    }
  }
}

findBeteenAge(20, 35);
