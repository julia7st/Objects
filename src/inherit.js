const Engineer = {
    role: "Engineer",
    department: "Engineering",
    showDetails: function() {
      console.log(`Role: ${this.role}, Department: ${this.department}`);
    }
  };
  
  const engineer = Object.create(Engineer);
  engineer.name = "John Tester";
  engineer.experience = 3;
  
  console.log("Details for Engineer:");
  console.log(`Name: ${engineer.name}, Experience: ${engineer.experience}`);
  engineer.showDetails();
  console.log("\n");
  
  const QAEngineer = Object.create(Engineer);
  QAEngineer.role = "QA Engineer"; 
  QAEngineer.testingTool = "Playwright";
  
  console.log("Details for QA Engineer:");
  console.log(`Name: ${QAEngineer.name}, Experience: ${QAEngineer.experience}, Testing Tool: ${QAEngineer.testingTool}`);
  QAEngineer.showDetails();


  