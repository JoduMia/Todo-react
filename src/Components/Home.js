import React, { useState } from 'react'

import AddTodo from './AddTodo';
import Todos from './Todos'

export default function Home() {
  const [dumTodo, setDumTodo] = useState([]);
  const handleTodo = (newTodo) => {
    setDumTodo(oldTodo => {
      return [...oldTodo, newTodo ]
    })
  };

  const delItem = (id) => {
    const filtered = dumTodo.filter(todo => todo.id !== id);
    setDumTodo(filtered);
  };
  return (
    <div className='container'>
        <h1 style={{color: "white"}}>Todo App</h1>
        <AddTodo handleTodo={handleTodo}/>
        <Todos delItem={delItem} todos={dumTodo}/>
    </div>
  )
}
