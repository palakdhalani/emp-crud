const Employee = require('../models/Employee');

class EmployeeService {
  async createEmployee(data) {
    if (!data.name || !data.number) {
      throw new Error('Name and number are required');
    }
    return await Employee.create(data);
  }

  async getAllEmployees() {
    return await Employee.findAll();
  }

  async getEmployeeById(id) {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  }

  async updateEmployee(id, data) {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      throw new Error('Employee not found');
    }
    
    employee.name = data.name || employee.name;
    employee.number = data.number || employee.number;
    
    await employee.save();
    return employee;
  }

  async deleteEmployee(id) {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      throw new Error('Employee not found');
    }
    await employee.destroy();
    return { message: 'Employee deleted successfully' };
  }
}

module.exports = new EmployeeService();
