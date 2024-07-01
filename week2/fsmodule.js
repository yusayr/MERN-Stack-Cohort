const fs = require("fs")


// readfile method is asynchronous and requires a callback to handle success and failure. This is used more often because we need to handle large amounts of data and it takes time to read such files. When reading file is complete, the data is logged. This is why we use callback.

fs.readFile("file.txt", "utf-8", (err, data)=>{  
    if (err) {
        console.error(err)
    }
    else {
        console.log(data)
    }
})


// fs.readFileSync is used for synchronous
const content = fs.readFileSync("file.txt", "utf-8")
console.log(content)
