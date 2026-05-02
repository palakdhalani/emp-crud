const employeeService = require('../services/employeeService');

// Create Employee
exports.createEmployee = async (req, res) => {
  try {
    const employee = await employeeService.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    const status = error.message === 'Name and number are required' ? 400 : 500;
    res.status(status).json({ message: error.message });
  }
};

// Get All Employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Employee
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await employeeService.getEmployeeById(req.params.id);
    res.status(200).json(employee);
  } catch (error) {
    const status = error.message === 'Employee not found' ? 404 : 500;
    res.status(status).json({ message: error.message });
  }
};

// Update Employee
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await employeeService.updateEmployee(req.params.id, req.body);
    res.status(200).json(employee);
  } catch (error) {
    const status = error.message === 'Employee not found' ? 404 : 500;
    res.status(status).json({ message: error.message });
  }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
  try {
    const result = await employeeService.deleteEmployee(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    const status = error.message === 'Employee not found' ? 404 : 500;
    res.status(status).json({ message: error.message });
  }
};
