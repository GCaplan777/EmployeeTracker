// PLACED IN employeeTracker.sql Department, Role, Employee

// DEPENDENCIES==================================

var mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "!Cupcakes1324",
  database: "employee_TrackerDB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`The database is connected on thread ${connection.threadId}`);
  start();
});

// start
const start = async () => {
  const { choice } = await inquirer.prompt({
    name: "choice",
    message: "What would you like to do?",
    type: "rawlist",
    choices: [
      "View All Employees",
      "View All Employees By Department",
      "View ALl Employees By Manager",
      "Add Employee",
      "Remove Employee",
      "Update Employee Role",
      "Update Employee Manager",
      "Exit",
    ],
  });

  // switch case based on user input to pick what to do next
  switch (choice) {
    case "View All Employees":
      return viewAllEmployees();
    case "View All Employees By Department":
      return viewAllEmployeesByDept();
    case "View ALl Employees By Manager":
      return viewAllEmployeesByManager();
    case "Add Employee":
      return addEmployee();
    case "Remove Employee":
      return removeEmployee();
    case "Update Employee Role":
      return updateEmployeeRole();
    case "Update Employee Manager":
      return updateEmployeeManager();
    default:
      connection.end();
  }
};

// viewAllEmployees
function viewAllEmployees() {
  connection.query(
    "SELECT  employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, CONCAT(manager.first_name,' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id  LEFT JOIN employee manager ON employee.manager_id = manager.id",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      start();
    }
  );
}

// viewAllEmployeesByDept
// // right now, all employee view, sorted by Dept. Perhaps use inquirer for user to choose by Dept?
function viewAllEmployeesByDept() {
  connection.query(
    "SELECT  employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, CONCAT(manager.first_name,' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id  LEFT JOIN employee manager ON employee.manager_id = manager.id ORDER BY department",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      start();
    }
  );
}

// viewAllEmployeesByManager
// right now, all employee view, sorted by Manager. Perhaps use inquirer for user to choose by Manager?
function viewAllEmployeesByManager() {
  connection.query(
    "SELECT  employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, CONCAT(manager.first_name,' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id  LEFT JOIN employee manager ON employee.manager_id = manager.id ORDER BY manager",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      start();
    }
  );
}

// addEmployee
// creating new Array to collect answer for Employee
const addEmployee = async () => {
  // connection.query("SELECT id, title FROM role", function (err, res) {
  //   if (err) throw err;
  //   console.table(res);
  // });
  const userInput = await inquirer.prompt([
    {
      type: "input",
      message: "Enter First Name",
      name: "first_name",
    },
    {
      type: "input",
      message: "Enter Last Name",
      name: "last_name",
    },
    {
      type: "input",
      message:
        "Enter Employee Role BY NUMBER 1. Manager Production, 2. Engineer Production, 3. Developer Production, 4. Manager Creative Services, 5. Analyst Creative Services, 6. Graphic Arts Creative Services, 7. Manager Marketing, 8. Advertising Marketing, 9. Sales Supervisor Marketing",
      name: "role_id",
    },
    {
      type: "input",
      message:
        "Enter Employee's Manager BY NUMBER 1. Julius Irving, 4 Bobby Jones, 7 Clint Richardson",
      name: "manager_name",
    },
  ]);

  var query = connection.query(
    "INSERT INTO employee SET ?",
    {
      first_name: userInput.first_name,
      last_name: userInput.last_name,
      role_id: userInput.role_id,
      manager_id: userInput.manager_id,
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee inserted!\n");
      // Call updateAddedEmployee AFTER the INSERT completes
      // updateAddedEmployee();
    }
  );
  start();
};

// function updateAddedEmployee() {
//   console.log("Updating all employees...\n");
//   var query = connection.query(
//     "UPDATE employee SET ? WHERE ?",
//     [
//       {
//         quantity: 100,
//       },
//       {
//         flavor: "Rocky Road",
//       },
//     ],
//     function (err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products updated!\n");
//       // Call deleteProduct AFTER the UPDATE completes
//       // deleteProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// removeEmployee
const removeEmployee = () => {};
// create prompt for user to select by employee by ID.
// Use CRUD delete method and perhaps loop to filter out

// updateEmployeeRole
const updateEmployeeRole = () => {};
// inquier PROMPT user for employee to update?
// inquier which part to update?

// updateEmployeeManager
const updateEmployeeManager = () => {};
// same beat.
