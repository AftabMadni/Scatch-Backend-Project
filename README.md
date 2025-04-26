

# Scatch Backend Project

This repository contains the backend implementation for the Scatch project, developed using Node.js, Express.js, and MongoDB. It provides RESTful APIs to support the frontend application, handling user authentication, file uploads, and other core functionalities.

## Features

- **User Authentication**: Secure login and registration using JWT tokens.
- **File Uploads**: Handle and store user-uploaded files efficiently.
- **Modular Architecture**: Organized codebase with clear separation of concerns.
- **Middleware Integration**: Custom middleware for error handling and request processing.


## Project Structure

```

Scatch-Backend-Project/
├── config/             # Configuration files (e.g., database connections)
├── controllers/        # Route handler functions
├── files/              # Uploaded files and related utilities
├── middlewares/        # Custom middleware functions
├── models/             # Mongoose schemas and models
├── public/             # Static assets
├── routes/             # API route definitions
├── utils/              # Utility functions
├── views/              # View templates (if using server-side rendering)
├── app.js              # Main application entry point
└── package.json        # Project metadata and dependencies

```


## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AftabMadni/Scatch-Backend-Project.git
   cd Scatch-Backend-Project
   ```


2. **Install dependencies**:

   ```bash
   npm install
   ```


3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/scatch
   JWT_SECRET=your_jwt_secret_key
   ```


4. **Start the server**:

   ```bash
   npm start
   ```


   The server should now be running at `http://localhost:3000/`.

