import { Sequelize } from 'sequelize';

// Database connection configuration
const sequelize = new Sequelize(process.env.DB_NAME || 'database', process.env.DB_USER || 'user', process.env.DB_PASSWORD || 'password', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres', // Change this to your database dialect (e.g., 'mysql', 'sqlite', etc.)
});

// Test the database connection
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

// Export the sequelize instance and the test function
export { sequelize, testConnection };