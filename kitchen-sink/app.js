var myName = "Zach";
console.log(myName); // Zach
var numOfStates = 50;
console.log(numOfStates);
function sayHello() {
    alert("Hello world");
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
    ;
}
;
checkAge("Charles", 21),
    checkAge("Abby", 27),
    checkAge("James", 18),
    checkAge("John", 17);
var favVeg = ["Broccoli", "Squash", "Carrots",];
for (var i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
}
;
var myPet = {
    name: "Nola",
    breed: "German Shepard"
};
console.log(myPet.name, myPet.breed);
var people = [
    {
        name: "Bill",
        age: 11
    },
    {
        name: "Bob",
        age: 10
    },
    {
        name: "Harry",
        age: 21
    },
    {
        name: "Marry",
        age: 89
    },
    {
        name: "Jenny",
        age: 2
    },
];
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
;
function getLength(string) {
    return string.length;
}
var stringLength = getLength('hello world');
var stringLength2 = getLength("hello mars");
if (stringLength % 2 === 0) {
    console.log("The world is nice and even");
}
else
    console.log('the world is an odd place');
if (stringLength2 % 2 === 0) {
    console.log("The world is nice and even");
}
else
    console.log('the world is an odd place');
