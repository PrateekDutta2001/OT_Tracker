import express from 'express';
import { json } from 'body-parser';
import { setRoutes } from './routes';
import { connectToDatabase } from './utils/db';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());

// Database connection
connectToDatabase()
    .then(() => {
        console.log('Database connected successfully');
        
        // Set up routes
        setRoutes(app);

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection failed:', err);
        process.exit(1);
    });