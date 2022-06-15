import React from 'react';

const date = new Date().toISOString().slice(0, 10);

const ToDoItem = () => {
  return (
    <li className="bg-gray-300">
      <div className="mt-8 mx-8 p-4 rounded-lg">
        <h1 className="text-lg">{date}</h1>
        <p>item</p>
        <p>item</p>
        <p>item</p>
      </div>
    </li>
  );
};

export default ToDoItem;
