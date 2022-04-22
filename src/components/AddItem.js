import React, { useState, useRef } from 'react'
import classes from './AddItem.module.css'
import {useDispatch} from 'react-redux'
import { addItem } from '../redux/action-creators'

const AddItem = ({addItemInputHandler}) => {
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const [todoListItem, setTodoListItem] = useState('')
    
    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(
            addItem(todoListItem),
            setTodoListItem('')
        )
        addItemInputHandler(todoListItem)
        inputRef.current.value = ""
        // setTodoListItem('')
    }

  return (
    <form onSubmit={submitHandler}>
      <label>Add Item</label> 
      <input type="text" className={classes['input-box']} onChange={(event) => setTodoListItem(event.target.value)} ref={inputRef}/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AddItem
