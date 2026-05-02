const express = require('express');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');
const routes = require('./routes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1', routes);

// Database sync and Server start
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    // sync() will create the table if it doesn't exist. { alter: true } updates the table schema if needed.
    await sequelize.sync({ alter: true });
    console.log('Database synchronized.');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
