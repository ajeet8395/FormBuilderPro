import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

export default function FormEditor({ boardData, onDragEnd, handleFieldClick, removeField }) {
  const handleInputChange = (field, index, value) => {
    const updatedField = { ...field, value };
    handleFieldClick(updatedField, index);
  };

  return (
    <Droppable droppableId="form">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="col-span-4 border border-gray-300 rounded-lg shadow-xl h-full p-4 bg-white"
        >
          <div className="h-auto grid grid-cols-2 gap-4">
            {boardData.map((field, index) => (
              <Draggable key={field.id} draggableId={field.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={`p-2 border border-gray-300 mb-2 rounded-md flex items-center justify-center ${field.width}`}
                    onClick={() => handleFieldClick(field, index)}
                  >
                    <div className="flex flex-col gap-2 w-full text-sm text-gray-800">
                      <div className="flex justify-between">
                        <label>{field.label}</label>
                        <button
                          type="button"
                          className="ml-2 text-red-600 hover:text-red-800"
                          onClick={() => removeField(index)}
                        >
                          Remove
                        </button>
                      </div>
                      <div>
                        {field.type === "checkbox" ? (
                          <div className="flex gap-4">
                            {field.options.map((option, optionIndex) => (
                              <label key={optionIndex} className="flex items-center">
                                <input type="checkbox" id={`${field.id}-${optionIndex}`} name={field.id} value={option} />
                                <span className="ms-1">{option}</span>
                              </label>
                            ))}
                          </div>
                        ) : field.type === "file" ? (
                          <input type="file" id={field.id} name={field.id} />
                        ) : field.type === "radio" ? (
                          <div className="flex gap-4">
                            {field.options.map((option, optionIndex) => (
                              <label key={optionIndex} className="flex items-center">
                                <input type="radio" id={`${field.id}-${optionIndex}`} name={field.id} value={option} />
                                <span className="ms-1">{option}</span>
                              </label>
                            ))}
                          </div>
                        ) : field.type === "dropdown" ? (
                          <select
                            id={field.id}
                            name={field.id}
                            className="p-2 border border-gray-300 rounded-md mr-2 w-full outline-none"
                          >
                            {field.options.map((option, optionIndex) => (
                              <option key={optionIndex} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : field.type === "textarea" ? (
                          <textarea
                            id={field.id}
                            name={field.id}
                            rows="4"
                            cols="4"
                            className="p-2 border border-gray-300 rounded-md mr-2 w-full"
                            value={field.value}
                            onChange={(e) => handleInputChange(field, index, e.target.value)}
                          />
                        ) : field.type === "button" ? (
                          <button type="button" className="p-2 border border-gray-300 rounded-md w-full">
                            {field.buttonLabel}
                          </button>
                        ) : (
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            value={field.value}
                            onChange={(e) => handleInputChange(field, index, e.target.value)}
                            className="p-2 border border-gray-300 rounded-md mr-2 w-full"
                          />
                        )}
                      </div>
                    </div>
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
}
