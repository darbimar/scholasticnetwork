import React, { ChangeEvent, FocusEvent } from 'react';

type InputProps = {
  className?: string;
  type?: 'text' | 'email' | 'number' | 'search';
  maxLength?: number;
  value: string | number | undefined;
  placeholder?: string;
  required?: boolean;
  min?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return <input {...props}></input>;
};

export default Input;
