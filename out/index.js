"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_1 = require("./employee");
var testEmployee = new employee_1.Employee("Mike", "Doughlas", 2000);
console.log("Hello " + testEmployee.firstName + " " + testEmployee.lastName + ". Salary: " + testEmployee.salary);
