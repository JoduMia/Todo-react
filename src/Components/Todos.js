import React from 'react'
import Todo from './Todo'

export default function Todos({todos,delItem}) {
  return (
    <section className='todos'>
        {todos.map(todo => <Todo delItem={delItem} key={todo.id} todo={todo} />)}
    </section>
  )
}
