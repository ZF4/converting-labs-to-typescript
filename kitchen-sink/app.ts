let myName: string = "Zach";
console.log(myName); // Zach

const numOfStates: number = 50;
console.log(numOfStates);

function sayHello(): void {
    alert("Hello world");
}
sayHello();

function checkAge(name: string, age: number): void {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    };
};
checkAge("Charles", 21),
checkAge("Abby", 27),
checkAge("James", 18),
checkAge("John", 17);

let favVeg: string[] = ["Broccoli", "Squash", "Carrots",]
for (let i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
};

let myPet = {
    name: "Nola",
    breed: "German Shepard",
};


console.log(myPet.name, myPet.breed);

let people: person[] = [
    {
        name: "Bill",
        age: 11,
    },
    {
        name: "Bob",
        age: 10,
    },
    {
        name: "Harry",
        age: 21,
    },
    {
        name: "Marry",
        age: 89,
    },
    {
        name: "Jenny",
        age: 2
    },
];
for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
    
};


function getLength(string: string): number {
    return string.length
}
let stringLength: number = getLength('hello world');
let stringLength2: number = getLength("hello mars");
if (stringLength % 2 === 0) {
    console.log("The world is nice and even")
} else console.log('the world is an odd place');

if (stringLength2 % 2 === 0) {
    console.log("The world is nice and even")
} else console.log('the world is an odd place');

interface pet {
    name: string,
    breed: string
}

interface person {
    name: string,
    age: number,
}