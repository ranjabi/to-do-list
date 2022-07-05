import React from 'react'

import { useSelector } from 'react-redux'
import ToDoItem from './ToDoItem'

const ToDoList = ({ filter, filterMap }) => {
  const todos = useSelector((state) => state.todo)

  return (
    <div className="container mx-auto">
      <div className="bg-white mt-6 px-4 py-8 rounded-xl w-8/12 mx-auto">
        {todos.length > 0 ? (
          <ul className="">
            {todos.filter(filterMap[filter]).map((todo) => (
              <ToDoItem
                key={todo.id}
                task={todo.task}
                id={todo.id}
                completed={todo.completed}
              />
            ))}
          </ul>
        ) : (
          <p className="text-center">To Do is empty</p>
        )}
      </div>
    </div>
  )
}

export default ToDoList
