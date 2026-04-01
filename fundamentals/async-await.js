const fs = require("fs").promises;

async function readAndProcess() {
    try {
        const data = await fs.readFile("./fundamentals/hello.js", "utf-8");
        const lines = data.split("\n").length;
        console.log(`File has ${lines} lines`);
    } catch (err) {
        console.error("Failed: ", err.message);
    }
}

// readAndProcess();

// Much more readable than nested callbacks.

function walkDog() {
    return new Promise((resolve) => {
        setTimeout(() => {

            const dogWalked = true;

            if(dogWalked) {
                console.log("You walked with the dog");
                resolve("Dog walk completed");
            }
            else {
                resolve("No dog walk today");
            }
        }, 1500);
    })
}

function walkCat() {
    return new Promise((resolve) => {
        setTimeout(() => {
            
            const catWalked = true;

            if(catWalked) {
                console.log("You walked with the cat");
                resolve("Cat walk completed");
            }
            else {
                resolve("No cat walk today");
            }
        }, 1500);
    })
}

async function doWalk() {
    await walkDog();
    await walkCat();
}

doWalk();