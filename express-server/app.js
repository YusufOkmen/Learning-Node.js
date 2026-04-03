const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
app.use(express.json()); // Allows server to understand JSON data

// Create a connecction to your MySQL database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Database connection failed", err);
        return;
    }
    console.log("Connected to MySQL database!");
});

// Get all members
app.get("/members", (req, res) => {
    db.query("SELECT * FROM members", (err, results) => {
        if (err) {
            res.status(500).send("Database error");
            return;
        }
        res.json(results);
    });
});

// Post a new member
app.post("/members", (req, res) => {
    const { name, email } = req.body;
    db.query("INSERT INTO members (name, email) VALUES (?, ?)", 
        [name, email],
        (err, result) => {
            if (err) {
                res.status(500).send("Database error", err);
                return;
            }
            res.json({ message: "Member added!", id: result.insertId });
        }); 
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

