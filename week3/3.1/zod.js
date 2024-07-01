const express = require("express");
const app = express();
const zod = require("zod");

const schema = zod.array(zod.number())  //.array is a keyword

app.use(express.json());

app.post("/", (req, res)=>{
    //[1,2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if (!response.success) {
        res.status(411).json({
            msg: "Invalid Input"
        })
    }
    res.send({
        response
    })
})

app.listen(100)

