import React, { FC, TextareaHTMLAttributes } from "react";
import { TextAreaComponent } from "./text-area.styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: FC<TextAreaProps> = ({ onChange, ...props }) => {
  return <TextAreaComponent onChange={onChange} {...props}></TextAreaComponent>;
};

export default React.memo(TextArea);
