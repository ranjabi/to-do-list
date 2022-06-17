import React from 'react';
import ToDoItem from './ToDoItem';

const date = new Date().toISOString().slice(0, 10);

const ToDoContainer = ({ date, items }) => {
  return (
      <li className="bg-white w-8/12 lg:w-5/12 mx-auto rounded-xl">
        <div className="mt-12 mx-8 py-10">
          <h1 className="text-xl font-bold text-center pb-4">{date}</h1>
          {items.map(e => <ToDoItem key={e} item={e} />)}
        </div>
      </li>
  );
};

export default ToDoContainer;
