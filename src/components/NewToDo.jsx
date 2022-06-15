import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addToDo, deleteToDo } from '../features/toDoSlice'

const NewToDo = () => {
  const todos =  useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
    <div className="p-16 bg-gray-500">
      <div className="container flex flex-col justify-center mx-auto">
        <h1 className='mx-auto p-4'>Add Your Things!</h1>
        <form className='flex justify-center' action="">
          <input className="border" type="text" name="" id="" />
          <button className="border" type="submit" onClick={() => dispatch(addToDo({nama: "kevin"}))}>
            submit 1
          </button>
          <button className="border" type="submit" onClick={() => dispatch(deleteToDo())}>
            submit 2
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewToDo;
