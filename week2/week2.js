//A simple HTTP request in ExpressJS
const express = require('express')
const app = express() //initialising express instance
// const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.post('/', (req, res) => {
  const message = req.body.message
  res.send(message);
  res.send({
    msg: "2+2 =4" 
  }) 
})

app.listen(port, () =>{
  console.log(`Example App listening on port ${port}`)
})
//create a todo app that lets users store todos on the server
 

