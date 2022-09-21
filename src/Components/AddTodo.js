import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({handleTodo}) {
    const [value, setValue] = useState({title: '', desc:''});
    const {title, desc} = value;
    const handleChange = (e) => {
        const name = e.target.name;
        setValue(oldValue => {
            return ({...oldValue, [name]: e.target.value, id:uuidv4()})
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleTodo(value);
        setValue({title: '', desc: ''})
    };

  return (
    <form action="" onSubmit={handleSubmit} className={'form'}>
        <div className={['form-field']}>
            <label htmlFor="title">Title: </label>
            <input type="text" value={title} name='title' onChange={handleChange} />
        </div>

        <div className={['form-field']}>
            <label htmlFor="todo">Description: </label>
            <textarea type="text" value={desc} name='desc' onChange={handleChange} />
        </div>
        <button type='submit'>ADD</button>
    </form>
  )
}
