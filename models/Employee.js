const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING, // Use STRING if you want to store numbers with leading zeros or symbols
    allowNull: false,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt
});

module.exports = Employee;
