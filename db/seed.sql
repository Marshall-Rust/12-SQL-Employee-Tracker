
INSERT INTO department (name)
VALUES ("Test1"),
    ("test2"),
    ("test3"),
    ("test4");

INSERT INTO role (title, salary, department_id)
VALUES ("Tester1", 69000, 2),
        ("Tester2", 420000, 1),
        ("Tester3", 69420, 3),
        ("Tester4", 3003135, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Y", 4, null),
        ("Paul", "B", 1, 1),
        ("Dog", "Cat", 2, 1),
        ("Cat", "Dog", 3, 1);