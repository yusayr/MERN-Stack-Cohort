const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://yusayr:H1R72W5PDSkRFFft@cluster0.o9g2cko.mongodb.net/userAppNew");

const User = mongoose.model("Users", { name: String, email: String, password: String });


app.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});

    if (existingUser) {
        return res.status(400).send("Username Already Exists")
    }

    const eachUser = new User(
        {
            name: name,
            email: username,
            password: password
        });
    
    eachUser.save();

    res.json({
        msg: "User created Successfully"
    })
})


app.listen(3000)



