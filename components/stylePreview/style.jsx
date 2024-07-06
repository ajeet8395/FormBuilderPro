import React, { useState } from "react";
import Link from "next/link";
import Accordion from "../accordion";
import Button from "./button";
import InputField from "./inputField";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Style() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [inputWidth, setInputWidth] = useState(100);
  const [labelColor, setLabelColor] = useState("#1a1919");
  const [labelFontSize, setLabelFontSize] = useState(14);
  const [linkColor, setLinkColor] = useState("#0284c7");
  const [btnFontColor, setBtnFontColor] = useState("#ffffff");
  const [btnFontSize, setBtnFontSize] = useState(14);
  const [btnBgColor, setBtnBgColor] = useState("#1d4ed8");
  const [btnAlignment, setBtnAlignment] = useState("left");

  const handleInputStyleClick = (style) => setSelectedStyle(style);
  const handleWidthChange = (e) =>  
    setInputWidth(Math.max(0, Math.min(100, e.target.value)));
  const handleLabelFontSize = (e) =>
    setLabelFontSize(Math.max(0, e.target.value));
  const handleBtnFontSize = (e) => setBtnFontSize(Math.max(0, e.target.value));

  const getInputClasses = () => {
    let classes = "border rounded bg-gray-50 border-gray-300 p-2 outline-none";
    switch (selectedStyle) {
      case 1:
        classes += " ";
        break;
      case 2:
        classes = classes.replace("border rounded", "") + " border-b";
        break;
      case 3:
        classes += " rounded-2xl";
        break;
      case 4:
        classes = classes.replace("rounded", "") + " ";
        break;
      default:
        break;
    }
    return classes;
  };

  const getButtonClasses = () => {
    let classes =
      "text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-4 py-2 mb-2 outline-none ";
    switch (selectedStyle) {
      case 1:
        classes += " rounded";
        break;
      case 2:
        classes = classes.replace("rounded", "");
        break;
      case 3:
        classes += " rounded-2xl";
        break;
      default:
        break;
    }
    return classes;
  };

  const getStyleClasses = (style) => {
    return selectedStyle === style
      ? "w-full border-2 border-blue-400 p-2 cursor-pointer bg-blue-50"
      : "w-full border border-blue-400 p-2 cursor-pointer";
  };

  return (
    <>
      <div className="w-full h-full grid grid-cols-2">
        {/* Left column */}
        <div className="bg-white border-r-2">
          {/* Input option */}
          <div className="p-6 border-b">
            <Accordion title="Input Options">
              <div className="px-4">
                <p className="text-sm pt-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugit vel consequatur error minima, ullam velit praesentium
                  voluptatum.
                </p>
                <p className="text-sm pt-2 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt enim ullam commodi eos?
                </p>
                <p className="text-sm pt-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur.{" "}
                  <Link
                    href="#"
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    Learn more
                  </Link>
                </p>
              </div>
              {/* select input field style */}
              <div className="grid grid-cols-2 gap-4 p-4">
                <div
                  className={getStyleClasses(1)}
                  onClick={() => handleInputStyleClick(1)}
                >
                  <div>
                    <InputField
                      label="Label"
                      id={"roundStyle"}
                      type={"text"}
                      className={
                        "bg-gray-50 border rounded border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5 mb-3"
                      }
                    />
                    <Button
                      className={
                        "text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-4 py-2 mb-2 outline-none rounded w-fit"
                      }
                      text="Submit"
                    />
                    <p className="text-black text-center font-medium">
                      Default
                    </p>
                  </div>
                </div>
                <div
                  className={getStyleClasses(2)}
                  onClick={() => handleInputStyleClick(2)}
                >
                  <div>
                    <InputField
                      label="Label"
                      id={"bottomBorder"}
                      type={"text"}
                      className={
                        "bg-gray-50 border-b border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5 mb-3"
                      }
                    />
                    <Button
                      className={
                        "text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-4 py-2 mb-2 outline-none rounded w-fit"
                      }
                      text="Submit"
                    />
                    <p className="text-black text-center font-medium">Linear</p>
                  </div>
                </div>
                <div
                  className={getStyleClasses(3)}
                  onClick={() => handleInputStyleClick(3)}
                >
                  <div>
                    <InputField
                      label="Label"
                      id={"circleround"}
                      type={"text"}
                      className={
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl outline-none block w-full p-2.5 mb-3"
                      }
                    />
                    <Button
                      className={
                        "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-2xl text-sm px-4 py-2 mb-2 outline-none w-fit"
                      }
                      text="Submit"
                    />
                    <p className="text-black text-center font-medium">
                      Rounded
                    </p>
                  </div>
                </div>
                <div
                  className={getStyleClasses(4)}
                  onClick={() => handleInputStyleClick(4)}
                >
                  <div>
                    <InputField
                      label="Label"
                      id={"sharp"}
                      type={"text"}
                      className={
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none block w-full p-2.5 mb-3"
                      }
                    />
                    <Button
                      className={
                        "text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-4 py-2 mb-2 outline-none w-fit"
                      }
                      text="Submit"
                    />
                    <p className="text-black text-center font-medium">Sharp</p>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
          {/* Style */}
          <div className="p-6">
            <Accordion title="Style">
              <div className="px-4">
                <p className="text-sm pt-2 text-gray-700">
                  To change your colors and fonts for all your form, go to{" "}
                  <Link
                    href="#"
                    target="_blank"
                    className="text-sky-600 font-semibold hover:underline inline-flex gap-1 items-center"
                  >
                    Form Settings{" "}
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </Link>
                </p>
                <p className="text-sm pt-2 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt enim ullam commodi eos?
                </p>
                <div className="flex flex-col gap-9 py-10">
                  {/* Width input field */}
                  <div>
                    <h4 className="text-gray-900 font-bold text-base mb-2">
                      General
                    </h4>
                    <InputField
                      label={"Input Width (%)"}
                      type="number"
                      value={inputWidth}
                      onChange={handleWidthChange}
                      className="block w-full lg:w-2/6 outline-none p-2 border border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>
                  {/* choose font family */}
                  <div>
                    <h4 className="text-gray-900 font-bold text-base mb-2">
                      Text
                    </h4>
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                      Font Family
                    </label>
                    <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg outline-none block w-full p-2.5"
                    >
                      <option selected>Choose a Font Family</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  {/* label style */}
                  <div className="flex justify-between">
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                        Label color
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={labelColor}
                          onChange={(e) => setLabelColor(e.target.value)}
                          className="w-10 h-10 bg-white rounded-full"
                        />
                        <InputField
                          type="text"
                          value={labelColor}
                          onChange={(e) => setLabelColor(e.target.value)}
                          className="block w-full outline-none p-2 border border-gray-300 rounded-md bg-gray-50"
                        />
                      </div>
                    </div>
                    {/* select size of label */}
                    <div>
                      <InputField
                        label={"Size"}
                        type="number"
                        value={labelFontSize}
                        onChange={handleLabelFontSize}
                        className="block w-full outline-none p-2 border border-gray-300 rounded-md bg-gray-50"
                        min="0"
                      />
                    </div>
                  </div>
                  {/* link color */}
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                      Link color
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={linkColor}
                        onChange={(e) => setLinkColor(e.target.value)}
                        className="w-10 h-10 bg-white rounded-full"
                      />
                      <InputField
                        type="text"
                        value={linkColor}
                        onChange={(e) => setLinkColor(e.target.value)}
                        className="block w-full outline-none p-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                  </div>
                  {/* button style */}
                  <div>
                    <h4 className="text-gray-900 font-bold text-base mb-2">
                      Button
                    </h4>
                    <div className="flex justify-between">
                      <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                          Background color
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={btnBgColor}
                            onChange={(e) => setBtnBgColor(e.target.value)}
                            className="w-10 h-10 bg-white rounded-full"
                          />
                          <InputField
                            type="text"
                            value={btnBgColor}
                            onChange={(e) => setBtnBgColor(e.target.value)}
                            className="block w-full outline-none p-2 border border-gray-300 rounded-md bg-gray-50"
                          />
                        </div>
                      </div>
                      {/* select alignment */}
                      <div className="w-full lg:w-[21%]">
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                          Alignment
                        </label>
                        <select
                          value={btnAlignment}
                          onChange={(e) => setBtnAlignment(e.target.value)}
                          className="block w-full outline-none p-2 border border-gray-300 rounded-md bg-gray-50"
                        >
                          <option value="left">Left</option>
                          <option value="center">Center</option>
                          <option value="right">Right</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                          Font color
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={btnFontColor}
                            onChange={(e) => setBtnFontColor(e.target.value)}
                            className="w-10 h-10 bg-white rounded-full"
                          />
                          <InputField
                            type="text"
                            value={btnFontColor}
                            onChange={(e) => setBtnFontColor(e.target.value)}
                            className="block w-full outline-none p-2 border border-gray-300 rounded-md bg-gray-50"
                          />
                        </div>
                      </div>
                      {/* select size of button font */}
                      <div>
                        <InputField
                          label={"Size"}
                          type="number"
                          value={btnFontSize}
                          onChange={handleBtnFontSize}
                          className="block w-full outline-none p-2 border border-gray-300 rounded-md bg-gray-50"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
        </div>

        {/* Right column */}
        <div className="p-4">
          <form className="bg-white p-6 border">
            <div className="flex flex-col gap-6">
              <InputField
                label="Email*"
                placeholder="Input Field"
                className={getInputClasses()}
                style={{ width: `${inputWidth}%` }}
                labelStyle={{
                  fontSize: `${labelFontSize}px`,
                  color: labelColor,
                }}
              />
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="First Name"
                  placeholder="Input Field"
                  className={getInputClasses()}
                  style={{ width: `${inputWidth}%` }}
                  labelStyle={{
                    fontSize: `${labelFontSize}px`,
                    color: labelColor,
                  }}
                />
                <InputField
                  label="Last Name"
                  placeholder="Input Field"
                  className={getInputClasses()}
                  style={{ width: `${inputWidth}%` }}
                  labelStyle={{
                    fontSize: `${labelFontSize}px`,
                    color: labelColor,
                  }}
                />
              </div>
              <InputField
                label="Phone Number"
                placeholder="Input Field"
                className={getInputClasses()}
                style={{ width: `${inputWidth}%` }}
                labelStyle={{
                  fontSize: `${labelFontSize}px`,
                  color: labelColor,
                }}
              />
              <div
                className={`flex ${
                  btnAlignment === "left"
                    ? "justify-start"
                    : btnAlignment === "center"
                    ? "justify-center"
                    : "justify-end"
                }`}
              >
                <Button
                  className={getButtonClasses() + " w-fit"}
                  text="Submit"
                  style={{
                    color: btnFontColor,
                    fontSize: `${btnFontSize}px`,
                    backgroundColor: btnBgColor,
                  }}
                />
              </div>
              {/* <Link href="#" className="text-sm" style={{color: `${linkColor}`}}>Read More</Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
