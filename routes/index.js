const express = require('express');
const router = express.Router();
const employeeRoutes = require('./employeeRoutes');

// Mount Employee Routes
router.use('/employees', employeeRoutes);

module.exports = router;
