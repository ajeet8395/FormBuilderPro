"use client";
import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FieldList from "@/components/form/fieldList";
import FormEditor from "@/components/form/formEditor";
import FieldPropertiesEditor from "@/components/form/fieldPropertiesEditor";

import {
  LockClosedIcon,
  CheckCircleIcon,
  PencilSquareIcon,
  EnvelopeIcon,
  StopIcon,
  CloudArrowUpIcon,
  CalculatorIcon,
  PhoneIcon,
  ChevronDownIcon,
  StopCircleIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

const initialFormFields = [
  { id: "text", label: "Text", icon: <PencilIcon className="w-4 h-4" /> },
  { id: "email", label: "Email", icon: <EnvelopeIcon className="w-4 h-4" /> },
  { id: "button", label: "Button", icon: <StopIcon className="w-4 h-4" /> },
  {
    id: "checkbox",
    label: "Checkbox",
    icon: <CheckCircleIcon className="w-4 h-4" />,
  },
  {
    id: "password",
    label: "Password",
    icon: <LockClosedIcon className="w-4 h-4" />,
  },
  {
    id: "file",
    label: "Uploader",
    icon: <CloudArrowUpIcon className="w-4 h-4" />,
  },
  {
    id: "number",
    label: "Number",
    icon: <CalculatorIcon className="w-4 h-4" />,
  },
  {
    id: "phone",
    label: "Phone Number",
    icon: <PhoneIcon className="w-4 h-4" />,
  },
  {
    id: "radio",
    label: "Radio Button",
    icon: <StopCircleIcon className="w-4 h-4" />,
  },
  {
    id: "dropdown",
    label: "Dropdown",
    icon: <ChevronDownIcon className="w-4 h-4" />,
  },
  {
    id: "textarea",
    label: "Textarea",
    icon: <PencilSquareIcon className="w-4 h-4" />,
  },
];

const Form = () => {
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState([]);
  const [formFields, setFormFields] = useState(initialFormFields);
  const [newField, setNewField] = useState("");
  const [selectedField, setSelectedField] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReady(true);
    }
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    // If dragging from formFields to form
    if (
      source.droppableId === "formFields" &&
      destination.droppableId === "form"
    ) {
      const draggedField = formFields[source.index];
      const newBoardData = [...boardData];
      newBoardData.splice(destination.index, 0, {
        ...draggedField,
        id: `${draggedField.id}-${Date.now()}`,
        type: draggedField.id,
        label: draggedField.label,
        width: "col-span-2",
        buttonLabel: draggedField.id === "button" ? "Button" : "", // Add button label
        value: "",
        options:
          draggedField.id === "checkbox" ||
          draggedField.id === "radio" ||
          draggedField.id === "dropdown"
            ? ["Option 1", "Option 2"]
            : [],
      });
      setBoardData(newBoardData);
    }

    // If reordering within the form droppable area
    if (source.droppableId === "form" && destination.droppableId === "form") {
      const reorderedFields = Array.from(boardData);
      const [removed] = reorderedFields.splice(source.index, 1);
      reorderedFields.splice(destination.index, 0, removed);
      setBoardData(reorderedFields);
    }
  };

  const removeField = (index) => {
    const updatedFields = [...boardData];
    updatedFields.splice(index, 1);
    setBoardData(updatedFields);
  };

  const handleNewFieldChange = (e) => {
    setNewField(e.target.value);
  };

  const addNewField = () => {
    if (newField.trim() !== "") {
      const newFormField = {
        id: newField.toLowerCase(),
        label: newField,
        icon: null,
      };
      setFormFields([...formFields, newFormField]);
      setNewField("");
    }
  };

  const handleFieldClick = (field, index) => {
    setSelectedField({ field, index });
  };

  const handleSelectedFieldChange = (e) => {
    const { name, value } = e.target;
    const updatedField = { ...selectedField.field, [name]: value };
    const updatedFields = [...boardData];
    updatedFields[selectedField.index] = updatedField;
    setBoardData(updatedFields);
    setSelectedField({ ...selectedField, field: updatedField });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...selectedField.field.options];
    updatedOptions[index] = value;
    const updatedField = { ...selectedField.field, options: updatedOptions };
    const updatedFields = [...boardData];
    updatedFields[selectedField.index] = updatedField;
    setBoardData(updatedFields);
    setSelectedField({ ...selectedField, field: updatedField });
  };

  const addOption = () => {
    const updatedOptions = [
      ...selectedField.field.options,
      `Option ${selectedField.field.options.length + 1}`,
    ];
    const updatedField = { ...selectedField.field, options: updatedOptions };
    const updatedFields = [...boardData];
    updatedFields[selectedField.index] = updatedField;
    setBoardData(updatedFields);
    setSelectedField({ ...selectedField, field: updatedField });
  };

  const removeOption = (index) => {
    const updatedOptions = [...selectedField.field.options];
    updatedOptions.splice(index, 1);
    const updatedField = { ...selectedField.field, options: updatedOptions };
    const updatedFields = [...boardData];
    updatedFields[selectedField.index] = updatedField;
    setBoardData(updatedFields);
    setSelectedField({ ...selectedField, field: updatedField });
  };

  return (
    <>
      <div className="flex flex-col h-full">
        {ready && (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-6 gap-3 p-2 h-full">
              <FieldList
                formFields={formFields}
                newField={newField}
                handleNewFieldChange={handleNewFieldChange}
                addNewField={addNewField}
              />
              <FormEditor
                boardData={boardData}
                onDragEnd={onDragEnd}
                handleFieldClick={handleFieldClick}
                removeField={removeField}
              />
              <FieldPropertiesEditor
                selectedField={selectedField}
                handleSelectedFieldChange={handleSelectedFieldChange}
                handleOptionChange={handleOptionChange}
                addOption={addOption}
                removeOption={removeOption}
              />
            </div>
          </DragDropContext>
        )}
      </div>
    </>
  );
};

export default Form;
