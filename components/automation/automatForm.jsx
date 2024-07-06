import { useState } from "react";
import { EyeIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Sidebar from "./sidebar";

export default function AutomatForm() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [cards, setCards] = useState([0]);

  const handleCardClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const handleAddCard = () => {
    setCards([...cards, cards.length]);
  };

  return (
    <>
      <div className="text-black min-h-96 h-full shadow-inner py-7 overflow-y-scroll bg-[#f7f7f7]">
        {cards.map((index) => (
          <div
            key={index}
            onClick={handleCardClick}
            className="border w-11/12 lg:w-2/4 mx-auto bg-white shadow hover:border-sky-600 hover:shadow-sky-500 mb-4"
          >
            <div className="flex gap-3 items-center p-4">
              <div className="w-8 h-8 border border-indigo-700 rounded-full flex justify-center items-center">
                <EnvelopeIcon className="w-5 h-5 text-indigo-700" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">1. Send email</h4>
                <p className="text-xs text-gray-400">
                  <span className="w-2 h-2 bg-red-500 mr-1 inline-flex rounded-full"></span>{" "}
                  Changes needed
                </p>
              </div>
            </div>
            <div className="px-4 pb-2">
              <p className="pb-6 text-base text-gray-700">
                This is a description or some other information.
              </p>
            </div>
            <div className="flex justify-between text-gray-700 items-center px-4 py-2 border-t">
              <TrashIcon className="w-4 h-4 cursor-pointer" />
              <div className="cursor-pointer flex items-center">
                <EyeIcon className="h-4 w-4 mr-1" />
                <span className="text-sky-600 font-bold">Show Detail</span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center py-4">
          <button
            onClick={handleAddCard}
            className="border p-2 rounded-full border-gray-500"
          >
            <PlusIcon className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </>
  );
}
