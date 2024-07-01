const express = require("express");
const app = express()

let requests = 0
const calculateReq = (req, res, next)=>{
    requests ++;
    console.log(requests);
    next();
}

app.use(calculateReq);

app.get("/", (req, res)=>{
    res.json({
        msg: "Done"
    })
})


app.listen(100, ()=>{
    console.log("Listening on Port 100")
})

