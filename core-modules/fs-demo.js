const fs = require("fs").promises;

async function run() {
    
    // Write a file
    await fs.writeFile("note.txt", "Hello from Node!");
    console.log("File written");

    // Read it back
    let data = await fs.readFile("note.txt", "utf-8");
    console.log("Content: ", data);

    // Append new line to it
    await fs.appendFile("note.txt", "\nSecond Line");
    data = await fs.readFile("note.txt", "utf-8");
    console.log("Content: ", data);

    // Delete the file
    await fs.unlink("note.txt");
    console.log("File deleted");
}

run();

