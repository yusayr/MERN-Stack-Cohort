import React, { useState, useEffect } from 'react'

function Todo() {
    const [todos, setTodos] = useState([])

    const fetchData = () => {
        fetch("https://sum-server.100xdevs.com/todos")
            .then((res) => {
                const result = res.json()
                return result
            })
            .then((result) => {
                const todos = result.todos;
                console.log(todos)
                setTodos(todos);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData();

        setInterval(fetchData, 5000);
            
    }, []);




    return (<>
        {todos.map((todo) => <CreateTodo key={todo.id} title={todo.title} description={todo.description}></CreateTodo>)}
    </>
    )
}

function CreateTodo({ title, description }) {

    return <>
        <h2>{title}</h2>
        <p>{description}</p>
    </>

}


export default Todo