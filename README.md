# OT_Tracker

This project is a web application that consists of a backend and a frontend, designed to work seamlessly with a database for data storage. Below is an overview of the project structure, setup instructions, and deployment requirements.

## Project Structure

```
webapp-project
├── backend                # Backend application
│   ├── src                # Source code for the backend
│   ├── package.json       # Backend dependencies and scripts
│   ├── tsconfig.json      # TypeScript configuration for the backend
│   └── README.md          # Documentation for the backend
├── frontend               # Frontend application
│   ├── public             # Public assets for the frontend
│   ├── src                # Source code for the frontend
│   ├── package.json       # Frontend dependencies and scripts
│   ├── tsconfig.json      # TypeScript configuration for the frontend
│   └── README.md          # Documentation for the frontend
├── infra                  # Infrastructure setup
│   ├── docker             # Docker configuration files
│   ├── docker-compose.yml  # Docker Compose configuration
│   └── README.md          # Documentation for infrastructure
├── database               # Database setup
│   ├── migrations         # Database migration scripts
│   └── README.md          # Documentation for database setup
└── README.md              # Overall project documentation
```

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies using npm:
   ```
   npm install
   ```
3. Configure the database connection in `src/utils/db.ts`.
4. Start the backend server:
   ```
   npm start
   ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies using npm:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

### Infrastructure

1. Ensure Docker is installed on your machine.
2. Navigate to the `infra` directory.
3. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

## Deployment Requirements

- A cloud service provider (e.g., AWS, Azure, Google Cloud) or a dedicated server to host the application.
- Docker for containerization of the backend and frontend applications.
- Nginx as a reverse proxy to manage incoming requests and serve the frontend application.
- A relational database (e.g., PostgreSQL, MySQL) or a NoSQL database (e.g., MongoDB) for data storage.
- Environment variables for sensitive configurations (e.g., database credentials, API keys).
- Monitoring and logging tools to track application performance and errors.
- A CI/CD pipeline for automated testing and deployment.

This README provides a comprehensive overview of the web application project, including setup instructions and deployment requirements. For more detailed information, please refer to the individual README files in the `backend`, `frontend`, `infra`, and `database` directories.
