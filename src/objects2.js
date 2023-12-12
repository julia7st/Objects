//1st object
let Object1 = new Object({
    name: "John",
    age: 20,
    isStudent: true
  });
  
  console.log(Object1.name); 
  console.log(Object1.age);  
  console.log(Object1.isStudent);  

//2nd object
  function Object2(name,age,isMarried){
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }

  let person = new Object2("David", 21, false)
  console.log(`${person.name} is ${person.age} years old.`);


//3nd object
function Object3(name, age, isStudent) {
  this.name = name;
  this.age = age;
  this.isStudent = isStudent;
}

let student = new Object3("Bob", 22, true);

console.log(student.name);
console.log(student.age);
console.log(student.isStudent);  
