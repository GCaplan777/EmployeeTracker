DROP DATABASE IF EXISTS employee_TrackerDB;

CREATE DATABASE employee_TrackerDB;

USE employee_TrackerDB;

-- department:
CREATE TABLE department (
  DeptID INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (30) NOT NULL,
  PRIMARY KEY (DeptID)
);

-- -- role:

-- CREATE TABLE role (
--   RoleID INT NOT NULL AUTO_INCREMENT,
--   title VARCHAR (30) NOT NULL,
--   salary DECIMAL(10,2) NOT NULL,
--   DeptID INT NOT NULL,
--   PRIMARY KEY (RoleID),
--   FOREIGN KEY (DeptID) REFERENCES department (DeptID)
-- );
-- -- employee:

-- CREATE TABLE employee (
--   id INT NOT NULL AUTO_INCREMENT,
--   first_name VARCHAR (30) NOT NULL,
--   last_name VARCHAR (30) NOT NULL,
--   role_id - INT NOT NULL, 
-- -- manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
--   PRIMARY KEY (id)
-- );
