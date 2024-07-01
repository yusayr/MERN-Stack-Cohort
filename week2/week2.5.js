const express = require("express")

const app = express();

const sum= (n) => {
    let ans = 0;
    for (let i=0; i<=n; i++){
        ans = ans + i;
    }
    return ans
}


app.get("/", (req, res)=>{
    const n = req.query.n; //taking the input
    const ans = sum(n);
    res.send("hi yusayr, your answer is " + ans);
})


// app.listen(3001);