const express = require("express");
const app = express();

app.use(express.json()); // Allows server to understand JSON data


// Your first endpoint
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.post("/tasks", (req, res) => {
    const tasks = req.body; // This is the data sent from the client
    console.log("Recieved Task", tasks);
    res.send("Task recieved!!!");  
})

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

