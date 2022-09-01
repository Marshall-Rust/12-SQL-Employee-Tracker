const inquirer = require("inquirer");
const mysql = require("mysql2");
const initQs = require("./utlis/questionprompts");
const Qs = require("./utlis/queries");

require('console.table');
const db = mysql.createConnection({
    host: "localhost",
    post: 3306,
    user: "root",
    password: "rootroot",
    database: "employees_db"
});

db.connect((err) => {
    if(err){
        console.log(err);
        return;
    } 
    console.log("Connected to databases");
})

const viewEmployees = () => {
    db.query(Qs.viewEmployees, (err, result) => {
        if (err) console.error(err);
        console.table(result);
        init();
    })
};

const viewDepartments = () => {
    db.query("SELECT * FROM department", (err, result) => {
        if (err) console.error(err);
        console.table(result);
        init();
    })
}

const viewRoles = () =>{
    db.query(Qs.viewRoles, (err, result) => {
        if (err) console.error(err);
        console.table(result);
        init();
    })
}

const init = async () => {
    let userPick = await inquirer.prompt(initQs);
    switch (userPick.userChoice){
       case "View All Employees":
            viewEmployees();
            break;
        case "View All Roles":
            viewRoles();
            break;
        case "View All Departments":
            viewDepartments();
            break;
        case "Add Employee":
            addEmployee();
            break;
        case "Update Employee Role":
            updateRole();
            break;
        case "Add Role":
            addRole();
            break;
        case "Add Department":
            addDepartment();
            break;
        case "Quit":
            process.exit();

    }
}

init();