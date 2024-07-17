# Chat Application

This project consists of a backend API and a frontend application for a real-time chat system.

## Backend API

The backend API is built using Node.js and Express, with Socket.IO for real-time communication. It handles user connections, message broadcasting, and user join/leave notifications.

### Features

- **Real-time Messaging**: Utilizes Socket.IO for bidirectional communication between clients and the server.
- **User Authentication**: Basic authentication with username or guest login.
- **Message Broadcasting**: Broadcasts messages to all connected clients.
- **User Join/Leave Notifications**: Notifies all users when a new user joins or leaves the chat.

### Technologies Used

- Node.js
- Express.js
- Socket.IO
- CORS
- dotenv for environment variables


## Frontend Application

The frontend application is built with React.js and integrates with the backend API to provide a user-friendly chat interface.

### Features

- **Real-time Message Updates**: Displays messages in real-time using Socket.IO events.
- **Message Input**: Allows users to send messages and see them instantly.
- **User Interface**: Clean and responsive design with message timestamps and user identification.

### Technologies Used

- React.js
- Socket.IO Client
- React Router for navigation
- Tailwind CSS for styling


### Video Demonstration

Watch a quick demonstration of the chat application in action:
![Chat App video](https://github.com/user-attachments/assets/632819e2-f03e-43dc-876e-d4e75b8bed77)


Youtube Video Link: https://youtu.be/ngkqPNoqZo0







### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your improvements.

### License

This project is licensed under the MIT License - see the LICENSE file for details.


