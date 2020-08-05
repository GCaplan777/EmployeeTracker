USE employee_TrackerDB;

INSERT INTO department (name)
VALUES ('Production'), ('Finance'), ('Human Resource'), ('IT');

INSERT INTO role (title, salary, DeptID)
VALUES ('Manager', 7, 1), ('Analyst', 6, 2), ('Sales Rep', 2, 3);

-- INSERT INTO employee (first_name, last_name)
-- VALUES ('Julius', 'Irving'), ('Moses', 'Malone'), ('Maurice', 'Cheeks');