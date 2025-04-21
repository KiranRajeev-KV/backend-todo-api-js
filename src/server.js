import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import todoRoutes from './routes/todo.routes.js';
import userRoutes from './routes/user.routes.js'
import { authenticate } from './middlewares/auth.js';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000

app.use('/api/user',userRoutes)
app.use('/api/todos', authenticate, todoRoutes);

app.get('/', (_,res) => {
    console.log("Server Ping!!!")
    res.send("Server Active.")
})

app.listen(PORT,() => { 
    console.log(`Server started at ${PORT}`)
})
