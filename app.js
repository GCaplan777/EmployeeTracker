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
  //   console.log(choice);
  // };

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
const viewAllEmployees = () => {};

// viewAllEmployeesByDept
const viewAllEmployeesByDept = () => {};

// viewAllEmployeesByManager
const viewAllEmployeesByManager = () => {};

// addEmployee
const addEmployee = () => {};

// removeEmployee
const removeEmployee = () => {};

// updateEmployeeRole
const updateEmployeeRole = () => {};

// updateEmployeeManager
const updateEmployeeManager = () => {};
