const fs = require("fs").promises // The promise-based version

fs.readFile("./fundamentals/hello.js", "utf8")
    .then(data => {
            console.log("Got the file!");
            return data.toUpperCase(); // Pass result to next .then()
        })
        .then(upper => {
            console.log("Uppercased: ", upper.slice(0, 32));
        })
        .catch(err => {
            console.error("Something went wrong: ", err.message);
        });
