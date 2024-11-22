// myName = "CJay"
// var myName = "CJ";
// const otherName = "Sam";
// let surname = "Jame";

// let tempArray = ["name", 2, "boy", 4, 5];

var tempJson = {
    name: {
        firsName: ["Mark", "James", "Samuel", { otherName: "thatName", someName: "example" }],
        lastName: ["Peter", "Obinna", "Ola"],
    },
    age: [23, 14, 54],
};

function userSearch(uName) {
    const nameIndex = tempJson["name"].indexOf(uName);
    const userAge = tempJson["age"][nameIndex];

    return `Hello, My name is ${uName}, I am ${userAge} years old`;
}

// console.log(userSearch("Samuel"));
console.log(tempJson["name"]["firstName"]);
