const Person = {
    name: "",
    age: 0,
    displayPersonDetails: function() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  };
  
  const person = Object.create(Person);
  person.name = "Emily";
  person.age = 23;
  
  console.log("Details for Person:");
  person.displayPersonDetails();
  console.log("\n");
  
  const Engineer = Object.create(Person);
  Engineer.role = "Engineer";
  Engineer.department = "Engineering";
  Engineer.displayEngineerDetails = function() {
    console.log(`Role: ${this.role}, Department: ${this.department}`);
  };
  
  const engineer = Object.create(Engineer);
  engineer.name = "John Doe";
  engineer.age = 35;
  engineer.experience = 5;
  
  console.log("Details for Engineer:");
  engineer.displayPersonDetails();
  engineer.displayEngineerDetails();
  console.log("\n");
  
  const QAEngineer = Object.create(Engineer);
  QAEngineer.role = "QA Engineer";
  QAEngineer.testingTool = "Playwright";
  
  const qaEngineer = Object.create(QAEngineer);
  qaEngineer.name = "Jane Smith";
  qaEngineer.age = 28;
  qaEngineer.experience = 3;
  
  console.log("Details for QA Engineer:");
  qaEngineer.displayPersonDetails();
  qaEngineer.displayEngineerDetails();
  console.log(`Testing Tool: ${qaEngineer.testingTool}`);
  