import React from 'react'
import style from './todo.module.css'
import { FaTrashAlt } from "react-icons/fa";
export default function Todo(props) {
    const {title, desc} = props.todo
    const {id} = props
    const handelClick = (id)=>{
        props.onRemoveTodo(id)
    }

  return (
    <article className={style.todo}>
        <div>
           
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>

        <div>
            <button className={style.btn} onClick={() =>{
                handelClick(id)
            }}>
                <i className='deleteIcon'> <FaTrashAlt /></i>
            </button>
        </div>
    </article>
  
  )
}
