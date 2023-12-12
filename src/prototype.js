let personPrototype1 = {
    intro: function() {
      console.log(`Hey, I am ${this.name}.`);
    }
  };
  
  let David = Object.create(personPrototype1);
  David.name = "David";
  David.age = 25;
  
  console.log(David.name); 
  console.log(David.age); 
  David.intro();          

  

let personPrototype2 = {
    intro: function() {
      console.log(`Hi! I am ${this.name}.`);
    }
  };

  let John = {
    name: "John",
    age: 30,
    __proto__: personPrototype2
  };
  
  console.log(John.name);
  console.log(John.age);  
  John.intro();           

  


  