const person = {
  name: "Adam Adamsson",
  age: 47,
  SSN: "19761125-1234",
  isSmoke: false,
};
const address = {
  street: "StoraGatan 1",
  city: "Strockholm",
  postCode: "131 50",
};

function mergePersonAddress(){
    const personInfo = Object.assign({}, person, address);
    console.log(personInfo);

}
mergePersonAddress();