 MERN Blog Application
 Objective
Build a full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog app demonstrating integration between front-end and back-end components, including API communication, database operations, and state management.

 Project Structure

mern-blog/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components (e.g. PostList, Navbar)
│   │   ├── pages/          # Page components (e.g. HomePage, PostForm)
│   │   ├── services/       # API services (e.g. api.js)
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── controllers/        # Route controllers (e.g. postController)
│   ├── models/             # Mongoose models (e.g. Post.js, Category.js)
│   ├── routes/             # API routes (e.g. posts.js, categories.js)
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
 Tasks Completed
Task 1: Project Setup
Set up Express.js server and connected to MongoDB using Mongoose

Configured CORS, JSON parsing, environment variables, and error handling

Set up React front-end using Vite

Configured proxy for API calls

Used dotenv for environment config

Task 2: Back-End Development
Implemented RESTful API:

GET /api/posts, GET /api/posts/:id, POST /api/posts, PUT /api/posts/:id, DELETE /api/posts/:id

GET /api/categories, POST /api/categories

Created Post and Category Mongoose models

Added input validation with express-validator

Added error-handling middleware

Task 3: Front-End Development
Built React components:

PostList — list all posts

HomePage — main landing page

Navbar — site navigation

Set up React Router for page navigation

Implemented React hooks (useState, useEffect) for state

Task 4: Integration and Data Flow
Integrated API service with front-end (api.js)

Connected posts and categories data to UI

Added basic form validation

Implemented loading and error states

Created category filter (in progress)

 How to Run
Server
cd server
npm install
npm run dev
Client
cd client
npm install
npm run dev
