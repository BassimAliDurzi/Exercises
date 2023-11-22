const person = {
  name: "Adam Adamsson",
  age: 47,
  SSN: "19761125-1234",
  isMaried: true,
  address: {
    street: "StoraGatan 1",
    city: "Strockholm",
    postCode: "131 50",
  },
};

function addProperty(object, property, value){
    object[property] = value;
}

function deleteProperty(object, property, value){
    delete object[property] == value;
}

addProperty(person, "IsSmoke", false);
deleteProperty(person,"isMaried", true);

console.log(person);
