import { useState } from 'react'

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return <div>
    <input type='text' style={{
      padding: 10,
      margin: 10
    }} placeholder="title" onChange={(e) => {
      const value = e.target.value;
      setTitle(value);
    }}></input><br></br>

    <input type='text' style={{
      padding: 10,
      margin:10
    }} placeholder="description" onChange={(e) => {
      setDescription(e.target.value);
    }}></input><br></br>

    <button style={{
      margin: 10,
      padding: 10
    }} onClick={() => {
      try {
        fetch("http://localhost:3000/todo", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            description: description
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(async function () {
            alert("Todo Added")
          })
      }
      catch (err) {
        alert("Failed to Add To-do")
      }

    }
    }>Add Todo</button>
  </div >
}