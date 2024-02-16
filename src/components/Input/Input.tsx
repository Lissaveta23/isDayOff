import * as React from "react";
import { useMaskito } from "@maskito/react";
import "./input.scss";
import { maskitoDateOptionsGenerator } from "@maskito/kit";
import { FC } from "react";

const options = maskitoDateOptionsGenerator({
  mode: "dd/mm/yyyy",
  separator: ".",
});

type InputProps = JSX.IntrinsicElements["input"];

export const Input: FC<InputProps> = (props) => {
  const { onChange } = props;

  const maskedInputRef = useMaskito({ options });

  return (
    <input
      type="text"
      className="input"
      onInput={onChange}
      ref={maskedInputRef}
      {...props}
    />
  );
};
