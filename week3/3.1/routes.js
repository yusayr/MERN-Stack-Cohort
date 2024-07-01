const express = require("express");
const app = express();

app.get("/health-checkup", (req, res) =>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (!(username === 'yusayr' && password === 'pass')){
        res.status(400).json({
            "msg": "Something's up with your inputs"
        })
    }

    if (!(kidneyId === "1" || kidneyId === "2")){
        res.status(400).json({
            "msg": "Something's up with your inputs"
        })
    }

    res.json({
        msg: "Kidney is fine"
    })
})


app.listen(100, ()=>{
    console.log("Listening")
});