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
  console.log(
    "\x1b[31m",
    "\x1b[40m",
    `


8888888888                        888                                          88888888888                       888                       
888                               888                                              888                           888                       
888                               888                                              888                           888                       
8888888    88888b.d88b.  88888b.  888  .d88b.  888  888  .d88b.   .d88b.           888  888d888 8888b.   .d8888b 888  888  .d88b.  888d888 
888        888 "888 "88b 888 "88b 888 d88""88b 888  888 d8P  Y8b d8P  Y8b          888  888P"      "88b d88P"    888 .88P d8P  Y8b 888P"   
888        888  888  888 888  888 888 888  888 888  888 88888888 88888888          888  888    .d888888 888      888888K  88888888 888     
888        888  888  888 888 d88P 888 Y88..88P Y88b 888 Y8b.     Y8b.              888  888    888  888 Y88b.    888 "88b Y8b.     888     
8888888888 888  888  888 88888P"  888  "Y88P"   "Y88888  "Y8888   "Y8888           888  888    "Y888888  "Y8888P 888  888  "Y8888  888     
                         888                        888                                                                                    
                         888                   Y8b d88P                                                                                    
                         888                    "Y88P"                                                                                     
`
  );
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
    }
  );
  start();
};

// removeEmployee
const removeEmployee = async () => {
  const userInput = await inquirer.prompt([
    {
      type: "input",
      message:
        "Remove Employee by ID. If needed, return first to View All Employees to find ID.",
      name: "id",
    },
  ]);

  var query = connection.query(
    "DELETE FROM employee WHERE ?",
    {
      id: userInput.id,
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee deleted!\n");
    }
  );
  start();
};

// updateEmployeeRole
const updateEmployeeRole = async () => {
  const userInput = await inquirer.prompt([
    {
      type: "input",
      message:
        "First, choose Role ID to update Employee. 1. Manager Production, 2. Engineer Production, 3. Developer Production, 4. Manager Creative Services, 5. Analyst Creative Services, 6. Graphic Arts Creative Services, 7. Manager Marketing, 8. Advertising Marketing, 9. Sales Supervisor Marketing.",
      name: "role_id",
    },
    {
      type: "input",
      message:
        "Choose Employee for update by ID. If needed, scroll up for Employee Reference in terminal, or return first to View All Employees to find ID.",
      name: "id",
    },
  ]);

  var query = connection.query(
    "UPDATE employee SET ? WHERE ?",
    [
      {
        role_id: userInput.role_id,
      },
      {
        id: userInput.id,
      },
    ],
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee updated!\n");
    }
  );
  start();
};

// updateEmployeeManager

const updateEmployeeManager = async () => {
  const userInput = await inquirer.prompt([
    {
      type: "input",
      message:
        "First, select Manager by their ID. 1. Julius Irving, Manager Production, 4. Bobby Jones, Manager Creative Services, 7. Clint Richardson, Manager Marketing",
      name: "manager_id",
    },
    {
      type: "input",
      message:
        "Choose Employee for update by ID. If needed, scroll up for Employee Reference in terminal, or return first to View All Employees to find ID.",
      name: "id",
    },
  ]);

  var query = connection.query(
    "UPDATE employee SET ? WHERE ?",
    [
      {
        manager_id: userInput.manager_id,
      },
      {
        id: userInput.id,
      },
    ],
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee Manager updated!\n");
    }
  );
  start();
};
