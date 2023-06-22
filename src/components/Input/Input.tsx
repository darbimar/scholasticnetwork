import React, { ChangeEvent, FocusEvent } from 'react';

type InputProps = {
  className?: string;
  type?: 'text' | 'email' | 'number' | 'search';
  maxLength?: number;
  value: string | number | undefined;
  placeholder?: string;
  name: string;
  id: string;
  required?: boolean;
  min?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <>
      <label hidden htmlFor={props.name}>
        {props.placeholder}
      </label>
      <input {...props}></input>
    </>
  );
};

export default Input;
