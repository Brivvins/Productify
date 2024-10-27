
# Product Store Application

This is a basic **Product Store** application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). It demonstrates the essential CRUD (Create, Read, Update, Delete) operations, making it a useful tool for understanding the workflow and structure of a full-stack application.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
  

## Features

- **Create** new products
- **Read** product information
- **Update** existing products
- **Delete** products
- RESTful API to manage CRUD operations
- Responsive design for desktop and mobile

## Tech Stack

- **Frontend:** React, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Tools:** Mongoose, Axios, dotenv, nodemon, Zustand, cors, cross-env

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (local or MongoDB Atlas for remote)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Brivvins/mern-stack-store.git
   cd product-store-app
   ```

2. **Install dependencies** for both frontend and backend:

   ```bash
   cd Backend
   npm install
   cd ../Frontend
   npm install
   ```

3. **Environment Configuration:** Rename `.env.example` to `.env` in the `Backend` directory and add your configuration values.

4. **Start the application:**

   - **Backend:**
     ```bash
     cd Backend
     npm start
     ```

   - **Frontend:**
     ```bash
     cd Frontend
     npm start
     ```

   Open your browser to `http://localhost:5000` to view the app.

## Environment Variables

Create a `.env` file in the `Backend` folder with the following:

```plaintext
MONGO_URI = your_mongodb_connection_string
PORT = 5000
NODE_ENV = development
```

> **Note:** If using MongoDB Atlas, ensure your IP is whitelisted and special characters in passwords are URL-encoded.

## Usage

1. **Create a Product:** Add a new product with name, price, description, etc.
2. **View Products:** View a list of all products in the store.
3. **Edit Product:** Update product details.
4. **Delete Product:** Remove products as needed.

## Screenshots

> Add screenshots of the main views, such as Product List, Add/Edit Product, etc.

## Future Enhancements

- **Add Authentication**
- **Pagination and Filtering** for product listings
- **Improved UI** with animations and better styling
- **Testing Suite** using Jest and Mocha

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.
