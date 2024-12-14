import React from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux"
import {removeTodo} from "../features/todo/todoSlice"

function Todos() {
  const todos = useSelector(state => state.todos || []); // Get the todos from the state
  const dispatch = useDispatch()


  return (
    <>
      <div className='text-3xl font-bold mb-4 text-center'>Todos</div>
      <div className='flex justify-center'>
        <div className='space-y-4'>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className='flex w-56 justify-between items-center p-2 border-b border-gray-300'
            >
              <div className='text-xl'>{todo.text}</div>
              <button onClick={()=> dispatch(removeTodo(todo.id))} className='text-red-500 hover:text-red-700 font-bold'>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todos;
