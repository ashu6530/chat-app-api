import http from 'http'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Server as SocketServer } from 'socket.io'
dotenv.config();
const app = express()
const PORT = 3000 || process.env.PORT

console.log(process.env.PORT);

const users =[{}]

// Middleware setup
app.use(cors({
    origin: 'https://chat-app-frontend-eight-coral.vercel.app', // Ensure you are using https
    methods: ['GET', 'POST'],
    credentials: true
  }));
app.use(express.json());

// Define a route
app.get('/',(req,res)=>{
    res.send('Hello')
})

// Create the HTTP server
const server = http.createServer(app)

// Attach socket.io to the server
const io = new SocketServer(server,{
    cors: {
      origin: 'https://chat-app-frontend-eight-coral.vercel.app/', // Update with your frontend URL
      methods: ['GET', 'POST'],
      credentials: true
    }
  })

// Handle socket connections
io.on('connection',(socket)=>{
    console.log('New Connection');


    socket.on('joined',({name})=>{
     users[socket.id] = name
     console.log(`${name} has joined ` );

     socket.broadcast.emit('userJoined',{user:'Admin',message:`${users[socket.id]} has joined`})
     socket.emit('welcome',{user:"Admin",message:` Welocome to the chat ${users[socket.id]}`})
    })
    
    socket.on('disconnect',()=>{
        socket.broadcast.emit('leave',{user:'Admin',message:`${users[socket.id]} has left`})
        console.log('user left');
    })

    socket.on('message',({message,id})=>{
        io.emit('sendMessage',{user:users[id],message,id})
    })
})

server.listen(PORT,()=>{
    console.log(`connected successfully at http://localhost:${PORT}`);
})