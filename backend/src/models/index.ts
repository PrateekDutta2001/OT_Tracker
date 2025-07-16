import { Sequelize } from 'sequelize';

// Initialize Sequelize with database connection details
const sequelize = new Sequelize(process.env.DB_NAME || 'database', process.env.DB_USER || 'user', process.env.DB_PASSWORD || 'password', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres', // or 'mysql', 'sqlite', etc.
});

// Import models
import User from './User';
import Post from './Post';

// Define associations
User.hasMany(Post);
Post.belongsTo(User);

// Export models and sequelize instance
export { sequelize, User, Post };