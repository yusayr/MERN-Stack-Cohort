//basic express boiler plate code
const { createTodo, updateTodo } = require("./types")
const { todoSchema } = require("./db")
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload) {
        res.status(411).json({
            msg: "Wrong Inputs"
        })
    }

    await todoSchema.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })

})

app.get("/todos", async (req, res) => {
    const todos = await todoSchema.find({});
    res.json({ todos: todos })
})

app.put("/completed/:id", async (req, res) => {
    const { id } = req.params;
    const parsedPayload = updateTodo.safeParse({ id });

    if (!parsedPayload.success) {
        return res.status(411).json({
            
            msg: "Updation Failed due to Incorrect Inputs",
            errors: parsedPayload.error.errors // Include error details
        });
    }

    try {
        const result = await todoSchema.updateOne(
            { _id: id },
            { $set: { completed: true } }
        );

        res.json({
            msg: "Update Successful"
        });
    } catch (err) {
        res.status(500).json({
            msg: "An error occurred",
            error: err.message
        });
    }
});

app.listen(3000, () => {
    console.log("App running on port 3000")
})

