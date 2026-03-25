const fs = require("fs");

console.log("1 - Start");

fs.readFile("./fundamentals/hello.js", "utf8", function(err, data) {
    if (err) {
        console.error("Error: ", err.message);
        return;
    }
    console.log("3 - File contents received");
});

console.log("2 - This runs BEFORE the file is done reading!");

