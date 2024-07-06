import { useState } from "react";
import Accordion from "../accordion";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Sidebar({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("editAction");

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-96 h-full bg-white shadow-lg shadow-gray-400">
        <form>
          <div className="flex justify-between items-center mb-2 bg-gray-50 p-4 border-b">
            <h4 className="text-base font-bold text-gray-900">1. Send email</h4>
            <div>
              <button
                type="button"
                className="border border-gray-400 bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-4 font-medium rounded mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="border bg-blue-700 hover:bg-blue-800 text-white py-1 px-4 font-medium rounded"
              >
                Save
              </button>
            </div>
          </div>
          <div className="flex border-b mb-4">
            <button
              type="button"
              className={`flex-1 py-2 text-center ${
                activeTab === "editAction"
                  ? "border-b-2 border-blue-700 text-blue-700"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("editAction")}
            >
              Edit Action
            </button>
            <button
              type="button"
              className={`flex-1 py-2 text-center ${
                activeTab === "contactsInAction"
                  ? "border-b-2 border-blue-700 text-blue-700"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("contactsInAction")}
            >
              Contacts in Action
            </button>
          </div>
          {activeTab === "editAction" && (
            <div className="px-4 lg:px-7">
              <div className="border border-orange-300 bg-orange-100 my-4">
                <Accordion
                  title={"Change needed"}
                  buttonClassName="bg-orange-100 rounded-none hover:bg-orange-100 text-gray-900"
                >
                  <ul className="list-disc list-inside">
                    <li>Choose a valid email or create a new one</li>
                  </ul>
                </Accordion>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium">
                  Send to
                </label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="option1"
                    name="actionOption"
                    value="option1"
                    className="mr-2"
                  />
                  <label htmlFor="option1" className="text-gray-700">
                    Enrolled contact
                  </label>
                </div>
                <div className="flex items-center mt-2">
                  <input
                    type="radio"
                    id="option2"
                    name="actionOption"
                    value="option2"
                    className="mr-2"
                  />
                  <label htmlFor="option2" className="text-gray-700">
                    Associated contact
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Automated email
                </label>
                <p className="text-xs pb-2 text-gray-700">
                  Only email saved automation will appear here.{" "}
                  <Link
                    href="#"
                    target="_blank"
                    className="text-sky-600 font-semibold hover:underline inline-flex gap-1 items-center"
                  >
                    Why? <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </Link>
                </p>
                <select className="w-full border border-gray-300 p-2 rounded outline-none bg-gray-50">
                  <option value="action1">Action 1</option>
                  <option value="action2">Action 2</option>
                </select>
              </div>
            </div>
          )}
          {activeTab === "contactsInAction" && (
            <div className="px-4 lg:px-7">
              <p>List of contacts in action will be displayed here.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
