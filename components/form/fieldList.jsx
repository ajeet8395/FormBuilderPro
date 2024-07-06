import React, { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

export default function FieldList ({ formFields, newField, handleNewFieldChange, addNewField })  {
  return (
    <Droppable droppableId="formFields" isDropDisabled={false}>
      {(provided) => (
        <div className="col-span-1 h-full flex flex-col relative overflow-hidden py-3 px-[.7rem] shadow-sm bg-white rounded-lg">
          <div className="py-2">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-none"
                placeholder="New Field"
                value={newField}
                onChange={handleNewFieldChange}
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-[.3rem] bg-blue-700 hover:bg-blue-800 outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1"
                onClick={addNewField}
              >
                Add
              </button>
            </div>
          </div>
          <div className="pb-1 text-lg text-gray-800">Fields</div>
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="grid grid-cols-2 gap-2"
          >
            {formFields.map((field, index) => (
              <Draggable
                key={field.id}
                draggableId={field.id}
                index={index}
              >
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="p-2 border border-gray-100 shadow-sm text-sm rounded-md flex items-center justify-start text-gray-800 col-span-1 bg-gray-50"
                  >
                    {field.icon}
                    <span className="ml-2">{field.label}</span>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};