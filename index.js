//importing inquirer
const inquirer = require("inquirer");
// added mysql
const mysql = require("mysql2");

// added initQs, and Qs under
const initQs = require("./utlis/questionprompts");
const Qs = require("./utlis/queries");

require("console.table");
// added require of console table ^

const db = mysql.createConnection({
  host: "localhost",
  post: 3306,
  //use your login
  user: "root",
  //added you password
  password: "rootroot",
  //set the database to employess_db
  database: "employees_db",
});
//started a db.connect
db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected to databases");
});

const viewEmployees = () => {
  db.query(Qs.viewEmployees, (err, result) => {
    if (err) console.error(err);
    console.table(result);
    init();
  });
};

const viewDepartments = () => {
  db.query("SELECT * FROM department", (err, result) => {
    if (err) console.error(err);
    console.table(result);
    init();
  });
};

const viewRoles = () => {
  db.query(Qs.viewRoles, (err, result) => {
    if (err) console.error(err);
    console.table(result);
    init();
  });
};

const init = async () => {
  let userPick = await inquirer.prompt(initQs);
  switch (userPick.userChoice) {
    case "View All Roles":
      viewRoles();
      break;
    case "View All Departments":
      viewDepartments();
      break;
    case "View All Employees":
      viewEmployees();
      break;
    case "Update Employee Role":
      updateRole();
      break;
    case "Add Employee":
      addEmployee();
      break;
    case "Add Department":
      addDepartment();
      break;
    case "Add Role":
      addRole();
      break;
    case "Quit":
      process.exit();
  }
};

init();
