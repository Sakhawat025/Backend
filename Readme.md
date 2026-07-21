## 🛠️ Key Features & Learning Highlights

This project is built following industry best practices for modern Node.js and Express.js backend development.

### 🏗️ Architecture & Project Setup
- **Professional Project Structure:** Configured standard folder hierarchy separating routes, controllers, models, middlewares, utils, and database connections.
- **Environment Management:** Utilized `dotenv` for securely managing sensitive credentials across environments.

### 🌐 API Design & Data Handling
- **Modular Routing & Controllers:** Implemented RESTful APIs using Express Router with clean division of responsibilities.
- **Custom Response & Error Handling:** Built custom API response and global error handling wrappers for standardized JSON outputs.
- **File Uploads:** Integrated **Multer** and **Cloudinary** middleware for handling single and multiple multipart file uploads seamlessly.
- **API Testing:** Tested and documented endpoints using **Postman**.

### 🗄️ Database & Data Modeling (MongoDB & Mongoose)
- **Advanced Data Modeling:** Modeled scalable schemas for User, Video, E-commerce, and Hospital Management entities using Mongoose.
- **Database Connectivity:** Handled robust connection setup with proper error logging and DNS resolution handling.
- **Mongoose Middleware Hooks:** Utilized `pre`/`post` hooks for automated schema tasks like password hashing.

### 🔐 Authentication & Security
- **Authentication:** Configured JWT (JSON Web Tokens) for secure, stateless user access and refresh token management.