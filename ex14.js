    function personInfo(person) {
        console.log("Name: " + person.name);
        console.log("Age: " + person.age);
        console.log("SSN: " + person.SSN);
        console.log("Married: " + person.isMaried);
        console.log("Address: " + person.address.street + ", "
                                + person.address.postCode + " "
                                + person.address.city)
    }

    const person = {
        name: "Adam Adamsson",
        age: 47,
        SSN: "19761125-1234",
        isMaried: true,
        address:{
            street: "StoraGatan 1",
            city: "Strockholm",
            postCode: "131 50"
        }
        }

personInfo(person);
