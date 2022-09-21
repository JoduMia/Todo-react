import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({todo,delItem}) {
    const {title, desc,id} = todo;
    const handleClick = (id) => {
        delItem(id);
    };
  return (
    <article className='todo'>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <button className='btntodo' onClick={() => handleClick(id)}>
            <FaTrashAlt />
        </button>
    </article>
  )
}

