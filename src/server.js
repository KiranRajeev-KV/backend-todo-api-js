import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 3000

app.get('/', (_,res) => {
    console.log("Server Ping!!!")
    res.send("Server Active.")
})

app.listen(PORT,() => { 
    console.log(`Server started at ${PORT}`)
})
