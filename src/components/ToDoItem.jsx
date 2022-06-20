import React from 'react';
import { useDispatch } from 'react-redux';
import { editToDo, deleteToDo } from '../features/toDoSlice';
import { FaEdit, FaTrash } from "react-icons/fa";

const ToDoItem = ({ item }) => {
  const dispatch = useDispatch();
  // console.log('todoitem', item);
  return (
    <>
      <div className="flex items-center py-2.5 px-4">
        {/* <input type="checkbox" className='mr-3 h-[23px] w-[23px]' name="" id="" /> */}
        <p className="text-lg w-full">{item.task}</p>
        {/* <button className="todo-btn" onClick={() => dispatch(editToDo(item.id))}>
          <FaEdit />
        </button> */}
        <button
          className="todo-btn"
          type="submit"
          onClick={() => dispatch(deleteToDo(item.id))}
        >
          <FaTrash />
        </button>
      </div>
      <div className="border-b border-slate-200 w-12/12 mx-auto"></div>
    </>
  );
};

export default ToDoItem;
