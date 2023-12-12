//1st object
let person = {
  name: ["John", "Tester"],
  age: 20,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  intro: function () {
    console.log(`Hi! I am ${this.name[0]}.`);
  },
};

//Usage
person.bio();
person.intro();


// 2nd object
let Object2 = {}

Object2.name = "John"
Object2.age = "34"
Object2.isMarried = true;

console.log(Object2.name);
console.log(Object2.isMarried);
console.log(`${Object2.name} is ${Object2.age}.`);

//3rd object
let Object3 = {
    name: "David",
    age: 21,
    isStudent: true
  };
  
  console.log(Object3.name); 
  console.log(Object3.age); 
  console.log(Object3.isStudent);  
