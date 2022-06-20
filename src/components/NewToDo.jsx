import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../features/toDoSlice';

const NewToDo = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
    // console.log(input);
  };

  const dateNow = new Date().toISOString().slice(0, 10);

  const addNewToDo = (event) => {
    event.preventDefault();
    dispatch(addToDo({ date: dateNow, items: input }));
  };

  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <div className="w-8/12 lg:w-5/12 rounded-xl pt-6 pb-10 flex flex-col justify-center mx-auto bg-white">
          <h1 className="mx-auto p-4 text-2xl mb-4 font-semibold">
            Add Your Things!
          </h1>
          <form className="flex justify-center" onSubmit={addNewToDo}>
            <input
              className="mr-4 px-2 border border-gray-400 rounded-md"
              type="text"
              name=""
              id=""
              onChange={inputHandler}
            />
            <button
              className="bg-blue-500 px-4 py-1 rounded-lg text-white"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewToDo;
