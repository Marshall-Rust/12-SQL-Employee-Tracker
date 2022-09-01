const queries = {
    viewEmployees: `SELECT
    employee.first_name,
    employee.last_name,
    role.title as role,
    role.salary as salary,
    department.name as department
    FROM employee, role, department
    WHERE employee.role_id = role.id
    AND role.department_id = department.id;`,

    viewRoles: `SELECT
    role.title as role
    role.salary as salary,
    department.name as department
    FROM employees_db.role
    JOIN department ON role.department_id = department.id`

}

module.exports = queries;