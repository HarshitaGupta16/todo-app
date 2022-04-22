import React, {useState, useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { updateItem } from '../redux/action-creators'
import classes from './UpdateItem.module.css'

const UpdateItem = ({isEdit, isEditHandler, idToBeEdited, inputValue}) => {
    const [updatedValue, setUpdatedValue] = useState(inputValue)
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const updateHandler = () => {
        isEditHandler(false)
        dispatch(updateItem(idToBeEdited, updatedValue))
    }

  return (
    <div className={classes.overlay} style={{display: isEdit ? 'block': 'none'  }} >
        <div className={classes.container}>
      {isEdit && <input type="text" onChange={event => setUpdatedValue(event.target.value)} defaultValue={updatedValue} />}
      {isEdit && <button onClick={updateHandler}>Update</button>}
      </div>
    </div>
  )
}

export default UpdateItem
