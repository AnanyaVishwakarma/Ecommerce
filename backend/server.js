import express from 'express';
import cors from 'cors';//this npm package because frontend and backend runs on different localhost, so CORS allows frontend to communicate with the backend
import dotenv from 'dotenv';
dotenv.config();
import "./db.js";
import connection from './db.js';

const app = express();

app.use(cors());
app.use(express.json());//allows backend to read JSON data from frontend
app.get("/products", (req, res) => {
    const query = "SELECT * from products";

    connection.query(query, (err, results)=>{
        if(err){
            console.log("Error fetching products.");
            return res.status(500).json({error: "Database Error"});
        }
        res.send(results);
    })
});

app.get("/categories", (req,res)=>{
    const query = "SELECT * from categories";

    connection.query(query, (err, results)=>{   
    if(err){
        console.error("Error fetching categories:", err);
        return res.status(500).json({ error: "Databse error"});
    }
    res.json(results);
    })
});

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server running")
})