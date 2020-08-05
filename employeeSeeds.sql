USE employee_TrackerDB;

INSERT INTO department (name)
VALUES ('Production'), ('Finance'), ('Human Resource');

INSERT INTO role (title, salary, DeptID)
VALUES ('Manager', 7, 1), ('Analyst', 6, 1), ('Sales Rep', 2, 1), ('Manager', 7, 2), ('Analyst', 6, 2), ('Sales Rep', 2, 2), ('Manager', 7, 3),
('Analyst', 6, 3), ('Sales Rep', 2, 3);

INSERT INTO employee (first_name, last_name, RoleID)
VALUES ('Julius', 'Irving', 1), ('Moses', 'Malone', 2), ('Maurice', 'Cheeks', 3), ('Bobby', 'Jones', 2);