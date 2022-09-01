const choices = ["View All Employees", "View All Roles", "View All Departments", "Add Employee", "Update Employee Role", "Add Role", "Add Department", "Quit"];

const initQs = [{
        type: "list",
        message: "What would you like to do?",
        name: "userChoice",
        choices: choices
}]


module.exports = initQs