INSERT INTO department (name)
VALUES ('Production'), ('Finance'), ('Human Resource');

INSERT INTO role (title, salary, department_id)
VALUES ('Manager_Production', 75000.50, 1), ('Analyst_Production', 70000, 1), ('SalesRep_Production', 65000, 1), ('Manager_Finance', 75000.50, 2), ('Analyst_Finance', 70000, 2), ('SalesRep_Finance', 60000, 2), ('Manager_HR', 75000.50, 3),
('Analyst_HR', 70000, 3), ('SalesRep_HR', 65000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Julius', 'Irving', 1, null), ('Moses', 'Malone', 2, 1), ('Maurice', 'Cheeks', 3, 1), ('Bobby', 'Jones', 4, null), ('Clemon', 'Johnson', 5, 4), ('George', 'Johnson', 6, 4), ('Clint', 'Richardson', 7, null), ('Sedale', 'Threatt', 8, 7), ('Andrew', 'Toney', 9, 7); 
