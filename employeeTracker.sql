DROP DATABASE IF EXISTS employee_TrackerDB;

CREATE DATABASE employee_TrackerDB;

USE employee_TrackerDB;

-- department:
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (30) NOT NULL,
  PRIMARY KEY (id)
);
 
-- -- role:

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR (30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department (id)
);
-- -- employee:

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR (30) NOT NULL,
  last_name VARCHAR (30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role (id)
);

