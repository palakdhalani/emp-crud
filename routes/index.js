const express = require('express');
const router = express.Router();
const employeeRoutes = require('./employeeRoutes');
const userRoutes = require('./userRoutes');

// Mount Routes
router.use('/employees', employeeRoutes);
router.use('/users', userRoutes);

module.exports = router;
