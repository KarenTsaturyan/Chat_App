# Node.js and React Chat Application

## About The Project
This is a real-time chat application built using Node.js for the backend and React for the frontend. It allows users to communicate in real-time. The application uses WebSocket for real-time communication and is designed with a responsive UI for a seamless chatting experience across various devices.

### Built With
- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Socket.IO](https://socket.io/)
- [Express](https://expressjs.com/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Before running the project, you need to have Node.js and npm (Node Package Manager) installed on your machine.

### Add .env file in server folder
 ```sh
PORT = 3000

MONGO_DB_URL = Your URL

JWT_SECRET = Your secret
```
- npm
  ```sh
  cd server | npm run dev
  cd client | npm run dev
