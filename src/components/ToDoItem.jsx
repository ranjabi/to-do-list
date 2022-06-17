import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDo } from '../features/toDoSlice';

const ToDoItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log('todoitem', item)
  return (
    <>
    <div className="flex justify-between my-5 px-4">
      <p className='text-lg'>{item}</p>
      <button
        className="bg-blue-500 text-white px-2 py-2 rounded-lg"
        type="submit"
        onClick={() => dispatch(deleteToDo())}
      >
        Delete
      </button>
    </div>
    <div className='border border-slate-100 w-12/12 mx-auto'></div>
    </>
  );
};

export default ToDoItem;
