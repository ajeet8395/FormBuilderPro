import React from "react";

export default function Button ({ className, text, style, min, backgroundColor, ...rest }) {
  return (
    <button type="button" className={className} style={style} min={min} backgroundColor={backgroundColor} {...rest}>
      {text}
    </button>
  );
};
