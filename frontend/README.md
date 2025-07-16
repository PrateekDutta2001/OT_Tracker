# Frontend Web Application

This is the frontend part of the web application project, built using React and TypeScript. Below are the instructions for setting up and running the frontend application.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Navigate to the frontend directory:

   ```bash
   cd webapp-project/frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

To start the development server, run:

```bash
npm start
```

This will launch the application in your default web browser at `http://localhost:3000`.

## Building for Production

To create a production build of the application, run:

```bash
npm run build
```

The production build will be generated in the `build` directory.

## Project Structure

- `public/`: Contains static files like `index.html`.
- `src/`: Contains the source code for the application.
  - `components/`: Contains reusable React components.
  - `pages/`: Contains the main pages of the application.
  - `index.tsx`: The entry point for the React application.

## Deployment

For deploying the frontend application, you can use Docker. Refer to the `infra/docker/frontend.Dockerfile` for instructions on how to build the Docker image for the frontend.

## Additional Information

For more details on the backend setup and API usage, please refer to the backend `README.md` file located in the `backend` directory. 

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. 

## License

This project is licensed under the MIT License.