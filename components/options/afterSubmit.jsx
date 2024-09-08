import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Link from "next/link";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function AfterSubmit() {
  const [emails, setEmails] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addEmail(inputValue.trim());
    }
  };

  const addEmail = (email) => {
    if (email && !emails.includes(email)) {
      setEmails([...emails, email]);
      setInputValue("");
    }
  };

  const removeEmail = (emailToRemove) => {
    setEmails(emails.filter((email) => email !== emailToRemove));
  };

  return (
    <>
      <div className="w-full min-h-screen h-full">
        <div className="mx-auto w-2/4 pt-7 flex flex-col gap-8">
          <div>
            <h2 className="font-semibold text-lg text-black">
              What should happen after someone submits this form?
            </h2>
            <div className="border rounded-md p-3 px-4 mt-4 bg-white">
              <p className="text-base mb-3 text-gray-900 font-medium">
                Choose between displaying a thank you message or redirecting
                people to another option.
              </p>
              <div className="flex flex-col gap-2">
                <div class="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="default-radio-2"
                    class="ms-2 text-sm  text-black"
                  >
                    Thank you message
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="default-radio-2"
                    class="ms-2 text-sm text-gray-900"
                  >
                    External URL
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="default-radio-2"
                    class="ms-2 text-sm text-gray-900"
                  >
                    Scheduling page
                    <span class="text-white bg-green-500 ms-1 text-[10px] px-1 py-[.15rem] font-medium rounded-sm shadow-md">
                      NEW
                    </span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="default-radio-2"
                    class="ms-2 text-sm text-gray-900"
                  >
                    Conditionally redirect to scheduling page.
                    <span class="text-white bg-green-500 ms-1 text-[10px] px-1 py-[.15rem] font-medium rounded-sm shadow-md">
                      NEW
                    </span>
                  </label>
                </div>
              </div>
              <p className="text-base text-gray-900 font-medium mb-3 mt-7">
                Display a thank you message when a form is submitted
              </p>
              <div className="mt-4">
                <Editor
                  apiKey="f8kroa61i85cpjrjk4w054qp77zozsjuouhvrwe07hkl2n4s"
                  init={{
                    plugins:
                      "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
                    toolbar:
                      "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                    tinycomments_mode: "embedded",
                    tinycomments_author: "Author name",
                    mergetags_list: [
                      { value: "First.Name", title: "First Name" },
                      { value: "Email", title: "Email" },
                    ],
                    ai_request: (request, respondWith) =>
                      respondWith.string(() =>
                        Promise.reject("See docs to implement AI Assistant")
                      ),
                  }}
                  initialValue="Welcome to TinyMCE!"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg text-black">
              Customize lifecycle stage based on submissions
            </h2>
            <div className="border rounded-md p-3 px-4 mt-4 bg-white flex flex-col gap-6">
              <p className="text-sm text-gray-900">
                Choose a lifecycle stage for any records created or updated by
                submissions to this form.
                <span className="text-sky-600 font-semibold">
                  {" "}
                  Learn more about the limitations of this setting.
                </span>
              </p>
              <div className="w-full md:w-2/4">
                <label
                  for="countries"
                  class="block mb-2 text-base font-semibold text-gray-900"
                >
                  Set lifecycle stage to
                </label>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
                >
                  <option selected>Choose a lifecycle</option>
                  <option value="US">Lifecycle 1</option>
                  <option value="CA">Lifecycle 2</option>
                  <option value="FR">Lifecycle 3</option>
                  <option value="DE">Lifecycle 4</option>
                </select>
              </div>
              <p className="text-sm text-gray-900">
                Note: This setting will override the default Lifecycle stage in
                <span className="text-sky-600 font-semibold">
                  {" "}
                  Lifecycle stage settings,{" "}
                </span>
                but it will never move a contact or company back to a previous
                lifecycle stage.
              </p>
            </div>
          </div>
          <div>
            <h2
              className="font-semibold text-lg flex text-gray-900"
              data-tip="true"
              data-html={true}
              data-for="infoTooltip"
            >
              Follow-up options
              <InformationCircleIcon className="h-5 w-5 text-gray-500 ml-2 cursor-pointer" />
            </h2>
            <ReactTooltip id="infoTooltip" place="top" effect="solid">
              <span className="bg-green-900 text-gray-800">
                Here are your follow-up options
              </span>
            </ReactTooltip>
            <div class="flex items-center mt-3">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              />
              <label for="link-checkbox" class="ms-2 text-sm text-gray-800">
                Send submission email notifications to the contact owner.{" "}
                <Link
                  href="#"
                  class="text-sky-600 font-semibold hover:underline"
                >
                  Learn more
                </Link>
              </label>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg flex text-gray-800">
              Send submission notifications to
              <InformationCircleIcon className="h-5 w-5 text-gray-500 ml-2 cursor-pointer" />
            </h2>
            <div className="w-full md:w-2/4 mt-3">
              <div className="flex flex-wrap items-center border border-gray-300 bg-white rounded-lg p-1">
                {emails.map((email, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-200 px-1 m-1 rounded"
                  >
                    <span className="text-sm">{email}</span>
                    <button
                      type="button"
                      onClick={() => removeEmail(email)}
                      className="ml-1 text-gray-500 hover:text-gray-700"
                    >
                      &times;
                    </button>
                  </div>
                ))}
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  className="flex-grow border-none focus:outline-none"
                  placeholder="Add email"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg flex text-gray-800">
              Form and error message language
              <InformationCircleIcon className="h-5 w-5 text-gray-500 ml-2 cursor-pointer" />
            </h2>
            <div className="w-full md:w-2/4 mt-3">
              <select
                id="countries"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
              >
                <option selected>Choose a lifecycle</option>
                <option value="US">Lifecycle 1</option>
                <option value="CA">Lifecycle 2</option>
                <option value="FR">Lifecycle 3</option>
                <option value="DE">Lifecycle 4</option>
              </select>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg flex text-gray-800">
              Other submission settings
            </h2>
            <div className="border rounded-md mt-4 bg-white">
              <div className="flex justify-between items-center border-b p-4">
                <div>
                  <h4 className="text-gray-900 font-medium text-base">
                    Always create contact for new email address
                  </h4>
                  <p className="text-sm pt-2 text-gray-900">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque, iure quibusdam quae provident pariatur dolore
                    distinctio aut. Accusamus quasi ipsa suscipit provident
                    voluptate vel! At!{" "}
                    <Link
                      href="#"
                      class="text-sky-600 font-semibold hover:underline"
                    >
                      {" "}Learn more
                    </Link>
                  </p>
                </div>
                <div>
                  <label class="block items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                  </label>
                </div>
              </div>
              <div className="flex justify-between items-center border-b p-4">
                <div>
                  <h4 className="text-gray-900 font-medium text-base">
                    Always create contact for new email address
                  </h4>
                  <p className="text-sm pt-2 text-gray-900">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque, iure quibusdam quae provident pariatur dolore
                    distinctio aut. Accusamus quasi ipsa suscipit provident
                    voluptate vel! At!{" "}
                    <Link
                      href="#"
                      class="text-sky-600 font-semibold hover:underline"
                    >
                      {" "}Learn more
                    </Link>
                  </p>
                </div>
                <div>
                  <label class="block items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                  </label>
                </div>
              </div>
              <div className="flex justify-between items-center border-b p-4">
                <div>
                  <h4 className="text-gray-900 font-medium text-base">
                    Always create contact for new email address
                  </h4>
                  <p className="text-sm pt-2 text-gray-900">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque, iure quibusdam quae provident pariatur dolore
                    distinctio aut. Accusamus quasi ipsa suscipit provident
                    voluptate vel! At!{" "}
                    <Link
                      href="#"
                      class="text-sky-600 font-semibold hover:underline"
                    >
                      {" "}Learn more
                    </Link>
                  </p>
                </div>
                <div>
                  <label class="block items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
