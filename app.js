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
  console.log(choice);
};

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

// allows the user to:

// Add
// departments, roles, employees

// View
// departments, roles, employees

// Update employee roles

// Bonus points if you're able to:

// Update employee managers

// View employees by manager

// Delete departments, roles, and employees

// View the total utilized budget of a department -- ie the combined salaries of all employees in that department

// function createProduct() {
//   console.log("Inserting a new product...\n");
//   var query = connection.query(
//     "INSERT INTO products SET ?",
//     {
//       flavor: "Rocky Road",
//       price: 3.0,
//       quantity: 50,
//     },
//     function (err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " product inserted!\n");
//       // Call updateProduct AFTER the INSERT completes
//       updateProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function updateProduct() {
//   console.log("Updating all Rocky Road quantities...\n");
//   var query = connection.query(
//     "UPDATE products SET ? WHERE ?",
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
//       deleteProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function deleteProduct() {
//   console.log("Deleting all strawberry icecream...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry",
//     },
//     function (err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }

// function readProducts() {
//   console.log("Selecting all products...\n");
//   connection.query("SELECT * FROM products", function (err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// }
