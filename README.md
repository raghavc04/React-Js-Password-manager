# Password Manager - React.js (use client in place of frontend or backend server)

## Overview
A secure and user-friendly password manager built using React.js for the frontend and Node.js with MongoDB for the backend. It allows users to store, retrieve, and manage their passwords securely.

## Features
- User authentication (login/register)
- Encrypted password storage
- Add, edit, and delete passwords
- Search functionality for stored passwords
 React.js (use client in place of frontend or backend server)

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Environment Management:** dotenv

## Prerequisites
Before setting up the project, ensure you have the following installed:
- Node.js (v14 or later)
- npm (Node Package Manager)
- MongoDB (local or cloud instance)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/username/react-password-manager.git
```

### 2. Navigate to the Project Directory
```bash
cd react-password-manager
```

### 3. Install Dependencies

#### Frontend
1. Navigate to the `frontend` folder:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```

#### Backend
1. Navigate to the `backend` folder:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```

### 4. Configure Environment Variables

#### Create a `.env` File
1. In the `backend` folder, create a file named `.env`:
```bash
touch .env
```

2. Add the following content to the `.env` file:
```plaintext
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

Replace:
- `your_mongodb_connection_uri` with your MongoDB connection string (e.g., from MongoDB Atlas or local MongoDB).
- `your_jwt_secret_key` with a secure string for JWT token generation.

### 5. Run the Application

#### Start the Backend Server
1. Navigate to the `backend` folder:
```bash
cd backend
```
2. Start the server:
```bash
npm start
```

#### Start the Frontend Server
1. Open a new terminal and navigate to the `frontend` folder:
```bash
cd frontend
```
2. Start the React development server:
```bash
npm start
```

### 6. Access the Application
Open your browser and go to:
```plaintext
http://localhost:5174
```

The backend server will be running on:
```plaintext
http://localhost:5174
```

## Deployment
To deploy the application:
1. Use a platform like Vercel or Netlify for the frontend.
2. Use a platform like Render or Heroku for the backend.
3. Ensure you configure environment variables correctly in the deployment platform.

## Folder Structure
```
react-password-manager/
│
├── frontend/           # Frontend code (React.js)
│   ├── public/         # Public assets
│   ├── src/            # React components and logic
│   └── package.json    # Frontend dependencies
│
├── backend/            # Backend code (Node.js, Express.js)
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── server.js       # Main server file
│   └── package.json    # Backend dependencies
│
└── README.md           # Project documentation
```

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bugfix:
```bash
git checkout -b feature-name
```
3. Commit your changes and push to your fork:
```bash
git commit -m "Description of changes"
git push origin feature-name
```
4. Open a pull request on GitHub.

## License
This project is licensed under the [MIT License](LICENSE).


