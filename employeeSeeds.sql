INSERT INTO department (name)
VALUES ('Production'), ('Creative_Services'), ('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES ('Manager', 100000.50, 1), ('Engineer', 90000, 1), ('Developer', 85000, 1), ('Manager', 100000.50, 2), ('Analyst', 90000, 2), ('Graphic_Arts', 86000, 2), ('Manager', 100000.50, 3),
('Advertising', 75000, 3), ('SalesSupervisor', 65000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Julius', 'Irving', 1, null), ('Moses', 'Malone', 2, 1), ('Maurice', 'Cheeks', 3, 1), ('Bobby', 'Jones', 4, null), ('Clemon', 'Johnson', 5, 4), ('George', 'Johnson', 6, 4), ('Clint', 'Richardson', 7, null), ('Sedale', 'Threatt', 8, 7), 
('Andrew', 'Toney', 9, 7), ('Sam', 'Williams', 5, 4), ('Leon', 'Wood', 2, 1);


