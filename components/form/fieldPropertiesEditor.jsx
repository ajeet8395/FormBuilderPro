import React from "react";

export default function FieldPropertiesEditor({
  selectedField,
  handleSelectedFieldChange,
  handleOptionChange,
  addOption,
  removeOption,
}) {
  return (
    <div className="col-span-1 h-full flex flex-col relative overflow-hidden py-3 px-2 shadow-sm bg-white rounded-lg">
      <h2 className="text-center text-lg text-gray-800 uppercase font-semibold">
        Edit Here
      </h2>
      {selectedField && (
        <div className="mt-3 p-4 border border-gray-300 rounded-md">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Width
            <select
              value={selectedField.field.width}
              name="width"
              onChange={handleSelectedFieldChange}
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md outline-none"
            >
              <option value={"col-span-2"}>Full Width</option>
              <option value={"col-span-1"}>Half Width</option>
            </select>
          </label>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Label
            <input
              type="text"
              name="label"
              value={selectedField.field.label}
              onChange={handleSelectedFieldChange}
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md outline-none"
            />
          </label>
          {selectedField.field.type === "button" && (
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Button Name
              <input
                type="text"
                name="buttonLabel"
                value={selectedField.field.buttonLabel || ""}
                onChange={handleSelectedFieldChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md outline-none"
              />
            </label>
          )}
          {selectedField.field.type !== "file" &&
            selectedField.field.type !== "button" &&
            selectedField.field.type !== "checkbox" &&
            selectedField.field.type !== "dropdown" && (
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Value
                <input
                  type="text"
                  name="value"
                  value={selectedField.field.value || ""}
                  onChange={handleSelectedFieldChange}
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md outline-none"
                />
              </label>
            )}
          {(selectedField.field.type === "checkbox" ||
            selectedField.field.type === "radio" ||
            selectedField.field.type === "dropdown") && (
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Options
              </label>
              {selectedField.field.options.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="block w-full p-2 mt-1 border border-gray-300 rounded-md outline-none"
                  />
                  <button
                    type="button"
                    className="ml-2 text-red-600 hover:text-red-800"
                    onClick={() => removeOption(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="mt-2 p-2 border border-gray-300 rounded-md w-full text-white font-semibold bg-blue-700 hover:bg-blue-800"
                onClick={addOption}
              >
                Add Option
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}