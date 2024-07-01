const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://yusayr:H1R72W5PDSkRFFft@cluster0.o9g2cko.mongodb.net/Todo-App")


const schema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todoSchema = mongoose.model('todos', schema)

module.exports = {
    todoSchema
}