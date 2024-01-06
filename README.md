# Rubik's Cube Web App

Welcome to the Rubik's Cube Web App! This server-side multipage web application allows users to register, login, view all cubes, and perform actions such as editing and deleting their own cubes. Guests can view cubes without authentication. Additionally, users can enhance their cubes by adding accessories, with a restriction of only one accessory of the same type per cube.

## Technologies Used

- **Express**: Web application framework for Node.js
- **Handlebars**: Templating engine
- **MongoDB and Mongoose**: NoSQL database and object modeling for Node.js
- **Bcrypt**: Password hashing
- **Cookie-parser**: Middleware for parsing HTTP request cookies
- **Jsonwebtoken**: JSON Web Token for user authentication

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:
2. Install dependencies:
3. Run the application:

## Project Structure

The project follows the MVC architecture:


## Usage

- Register and login to manage your cubes.
- View all cubes or only your own cubes.
- Search cubes by given criteria.
- Edit or delete your cubes.
- Add accessories to your cubes (limit of one accessory per type).

## Authentication

User authentication is handled using JSON Web Tokens (JWT). Bcrypt is used for password hashing, and cookie-parser helps parse HTTP request cookies.

## Database

The application uses MongoDB as the NoSQL database, and Mongoose for object modeling in Node.js.

## License

This project is licensed under the [MIT License](LICENSE.md).
