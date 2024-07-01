const express = require("express");
const app = express()
app.use(express.json())

let totalDuration = 0;
let requests = 0;
const finish = () =>{
    const duration = Date.now() - start;
    requests++
    totalDuration += duration;
    let average = totalDuration/ requests
    console.log(`Average Duration ${average}ms`);
}


app.use((req, res, next) => {
    const start = Date.now();
    next();
    finish(start);
  });



app.get("/", (req, res)=>{
    res.json({msg: "Done"})
})

app.listen(100)