import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  return (
    <div className='flex justify-center bg-gray-200'>
      <ul className='container p-8'>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ul>
    </div>
  );
};

export default ToDoList;