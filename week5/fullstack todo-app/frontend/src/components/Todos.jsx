import axios from 'axios';

export function Todos({ todos }) {

    function update(e, id) {
        e.target.innerHTML ="Completed"
        axios.put(`http://localhost:3000/completed/${id}`)
        .then(res=> console.log(res))
        .catch(err=> console.log(err))
    }

    return <div style={{margin:10}}>
        {todos.map(function (todo) {
            return <>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={function(e) {update(e, todo._id)}}>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
            </>
        })}

    </div>
}