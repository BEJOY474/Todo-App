import React, { useState } from 'react'
import style from './newtodo.module.css'
export default function NewTodo(props) {

    const [todo, setTodo] = useState({title : "", desc:""})
    const {title, desc} = todo
   

    const handelChange = (event) =>{
        const name = event.target.name
        setTodo((oldTodo)=>{
            return {...oldTodo, [name]: event.target.value }
        })
    }

    const handelSubmit = (event) =>{
        event.preventDefault();
        props.onAddTodo(todo)
        setTodo({title: "", desc:""})
    }

  return (
   
      <form className={style.form} onSubmit={handelSubmit}>
          <div className={style.formField}>
              <label htmlFor='title'>Title :  </label>
              <input type='text' id='title'
             
              onChange={handelChange}
              value={title} name='title'></input>
          </div>

          <div className={style.formField}>
              <label htmlFor='desc'>Description :  </label>
              <textarea type='text' id='desc'
             
               onChange={handelChange}
              value={desc} name='desc'></textarea>
          </div>
          <button type='submit'>Add Todo</button>
      </form>
  
  )
}
