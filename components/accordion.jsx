import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Accordion({
  title,
  children,
  buttonClassName,
  panelClassName,
  showAdditionalElements,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton
            className={`flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-left bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 ${buttonClassName}`}
            onClick={() => setIsOpen(!open)}
          >
            <div className="flex items-center gap-2">
              {isOpen ? (
                <ChevronUpIcon className="w-5 h-5 text-black" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-black" />
              )}
              {title}
            </div>
            {showAdditionalElements && (
              <div className="flex items-center gap-4">
                <div className="flex items-center ">
                  <span className="mr-2 text-sm text-gray-700">
                    {isToggleOn ? "ON" : "OFF"}
                  </span>
                  <label className="inline-flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={isToggleOn}
                      onChange={() => setIsToggleOn(!isToggleOn)}
                    />
                    <div className="w-10 h-4 bg-gray-300 rounded-full shadow-inner"></div>
                    <div
                      className={`dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${
                        isToggleOn
                          ? "transform translate-x-full bg-blue-500"
                          : "bg-gray-500"
                      }`}
                    ></div>
                  </label>
                </div>
                <div>
                  <select className="text-sm border-gray-300 rounded-md shadow-sm outline-none border text-gray-700 px-2 py-1" onClick={(e) => e.stopPropagation()}>
                    <option selected>Actions</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            )}
          </DisclosureButton>
          <DisclosurePanel
            className={`px-4 py-2 text-sm text-gray-500 ${panelClassName}`}
          >
            {children}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
