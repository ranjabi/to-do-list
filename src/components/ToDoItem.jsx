import React from 'react'
import { useDispatch } from 'react-redux'
import { editToDo, deleteToDo, finishToDo } from '../features/toDoSlice'
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa'
import { useState } from 'react'

const EditSection = ({ isEditing, setEditing, id }) => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const editHandler = (event) => {
    event.preventDefault()
    dispatch(editToDo({ id: id, newTask: input}))
    setEditing(!isEditing)
    setInput('')
    console.log(input, id)
  }
  return (
    <form onSubmit={editHandler} className="flex flex-col lg:flex-row w-1/2" action="">
      <input className="border border-gray-400 rounded-md" type="text" name="" id="" onChange={({ target }) => {setInput(target.value)}} />
      <button className='bg-blue-500 text-white rounded-md px-2 py-1 w-12 mt-2 ' type="submit">Save</button>
    </form>
  )
}

const ToDoItem = ({ id, task, completed }) => {
  const [isEditing, setEditing] = useState(false)

  const dispatch = useDispatch()
  // console.log('todoitem', item);
  return (
    <div className="">
      <div className="flex justify-between items-center py-2.5 px-4">
        {isEditing ? <EditSection isEditing={isEditing} setEditing={setEditing} id={id} /> : <p className="text-lg w-full">{task}</p>}
        <div>
          {completed ? null : (
            <button
              className="task-btn bg-green-400"
              onClick={() => dispatch(finishToDo(id))}
            >
              <FaCheck />
            </button>
          )}
          <button className="task-btn" onClick={() => setEditing(true)}>
            <FaEdit />
          </button>
          <button
            className="task-btn bg-red-400"
            type="submit"
            onClick={() => dispatch(deleteToDo(id))}
          >
            <FaTrash />
          </button>
        </div>
      </div>
      <div className="border-b border-slate-200 w-12/12 mx-auto"></div>
    </div>
  )
}

export default ToDoItem
