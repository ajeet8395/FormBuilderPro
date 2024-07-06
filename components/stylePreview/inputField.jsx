import React from "react";

export default function InputField ({ label, id, type, className, placeholder, style, value, onChange, min, max, labelStyle, ...props }) {
  return (
    <div className="">
      {label && (
      <label className="block text-sm font-medium text-gray-900 mb-1"
        style={labelStyle}
      >
        {label}
      </label>
    )}
      <input className={className} placeholder={placeholder} id={id} type={type} style={style} value={value} onChange={onChange} min={min} max={max} {...props}/>
    </div>
  );
};
