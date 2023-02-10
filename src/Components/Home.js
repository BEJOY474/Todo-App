import React, { useState } from 'react'
import Todos from './Todos'
import style from './Home.module.css'
import NewTodo from './NewTodo'

import {v4 as uuidv4} from 'uuid'


export default function Home() {

  const [todos, setTodos] = useState([])

  const handelAddNewTodo = (todo) =>{
      setTodos((prevTodo) =>{
        return [...prevTodo, {id: uuidv4(), todo}]
      } )
  }

  const handelRmoveTodo = (id) =>{
    setTodos((prevTodos)=>{    
       const filteredTodod = prevTodos.filter((todo)=>todo.id !==id )
       return filteredTodod
    })
  }

  return (
    <div className={style.container}>
        <h1 className={style.title} >Todo App</h1>
        <NewTodo onAddTodo={handelAddNewTodo} />
        <Todos todos={todos} onRemoveTodo={handelRmoveTodo}/>
    </div>
  )
}
